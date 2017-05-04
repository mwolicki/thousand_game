module Game
open System

[<StructuredFormatDisplay("{Char}")>]    
type Suit = Club | Diamond | Heart | Spade
with 
    member x.Char =
        match x with Club -> '♣' | Diamond -> '♦' | Heart -> '♥' | Spade -> '♠'
    member x.MarriagePoints =
        match x with Club -> 60 | Diamond -> 80 | Heart -> 100 | Spade -> 40
    member x.Order =
        match x with Club -> 0 | Diamond -> 1 | Heart -> 3 | Spade -> 2
    static member FromChar = function '♣' -> Club | '♦' -> Diamond | '♥' -> Heart 
                                        | '♠' -> Spade | x -> failwithf "Cannot parse %c" x 
    override x.ToString () = x.Char.ToString()

[<StructuredFormatDisplay("{Char}")>]
type Rank = Rank9 | Jack | Queen | King | Rank10 | Ace
with
    member x.Char = 
        match x with Rank9 -> '9' | Jack -> 'J' | Queen -> 'Q' | King -> 'K'
                                    | Rank10 -> 'T' | Ace -> 'A'
    member x.Points = 
        match x with Rank9 -> 0 | Jack -> 2 | Queen -> 3 | King -> 4
                                    | Rank10 -> 10 | Ace -> 11
    member x.Order = -x.Points
    static member FromChar = function '9' -> Rank9 | 'J' -> Jack | 'Q' -> Queen | 'K' -> King
                                        | 'T' -> Rank10 | 'A' -> Ace | x -> failwithf "Cannot parse %c" x 

[<StructuredFormatDisplay("{AsString}")>]
type Card = { Suit : Suit; Rank : Rank }
with 
    override x.ToString() = sprintf "%c%c" x.Suit.Char x.Rank.Char
    member x.AsString = x.ToString()


type Name = string

type PlayerType =
    | Computer of name:Name
    | LocalHuman of name:Name
    | RemoteHuman of name:Name * address:string

type Player = Player1 of PlayerType | Player2 of PlayerType | Player3 of PlayerType
with member p.PlayerType = match p with Player1 pt | Player2 pt | Player3 pt -> pt

type Players = { Player1: Player; Player2: Player; Player3: Player }
with 
    member p.NextPlayer = function Player1 _ -> p.Player2 | Player2 _ -> p.Player3
                                    | Player3 _ -> p.Player1
    member p.PreviousPlayer = function Player1 _ -> p.Player3 | Player2 _ -> p.Player1
                                        | Player3 _ -> p.Player2
    member p.Item with get (x) = match (x-1) % 3 with 0 -> p.Player1 | 1 -> p.Player2 | _ -> p.Player3

type ScoreAdditions = Obligation | Bomb
type Score = { Player1: int * ScoreAdditions Set; Player2: int  * ScoreAdditions Set; Player3: int * ScoreAdditions Set }

type Deck = Card list
type Cards = Card list

type ShuffledCards = { Stock : Cards; Player1 : Cards; Player2: Cards; Player3 : Cards } 

type BidState =
    | Pass
    | Bid of uint16

type BiddingState = { Bids: Map<Player, BidState>; CurrentPlayer : Player; Cards: ShuffledCards }
type PlayRoundState = { BiddingWinner: Player
                        CurrentPlayer : Player
                        Cards: Map<Player, Cards>
                        CardsOnTable : Card list }

type RoundState =
    | Bidding of BiddingState
    | PlayRound of PlayRoundState

type PlayGameState = { Players : Players; Score:Score list; RoundState : RoundState }

type GameState =
    | Game of PlayGameState
    | Finished of Players * Score list * winner:Player

let cardDeck = [ for s in [ Club; Diamond; Heart; Spade ] do
                    for r in [ Rank9; Jack; Queen; King; Rank10; Ace ] ->
                        { Suit = s; Rank = r } ]
let rnd = Random()
let randomCardDeck (rnd:Random) = cardDeck |> List.sortBy (fun _ -> rnd.Next ())

let cardSort = List.sortBy(fun card -> card.Suit.Order, card.Rank.Order)

let deckSplit (deck:Deck) =
    { Stock = deck |> List.take 3 |> cardSort
      Player1 = deck |> List.skip 3 |> List.take 7 |> cardSort
      Player2 = deck |> List.skip 10 |> List.take 7 |> cardSort
      Player3 = deck |> List.skip 17 |> List.take 7 |> cardSort }

let newGame player1 player2 player3 rnd=
    match player1, player2, player3 with
    |Player1 _, Player2 _, Player3 _ ->
        let players : Players = { Player1 = player1; Player2 = player2; Player3 = player3 }
        let shuffledCards = randomCardDeck rnd |> deckSplit    
        let obligatedPlayer = rnd.Next 3 + 1
        let getObligation player = if obligatedPlayer = player then Set [Obligation] else Set.empty
        let score = { Player1 = 0, getObligation 1; Player2 = 0, getObligation 2; Player3 = 0, getObligation 3}
        let biddingState = { Bids = Map.empty; CurrentPlayer = players.[obligatedPlayer + 1]; Cards = shuffledCards }
        let gameState = { Players = players; Score = [score]; RoundState = Bidding biddingState }
        Game gameState
    | _ -> failwith "Unsupported players types."

type BiddingEvent =
| Bid of bid:int
| Pass

type RoundEvent =
| PutCard of Card

type GameEvents =
| BiddingEvent of Player * BiddingEvent
| RoundEvent of Player * RoundEvent

let processEvent gameState event =
    match gameState, event with
    | Game { RoundState = Bidding _ }, BiddingEvent (player, event) -> 
        gameState