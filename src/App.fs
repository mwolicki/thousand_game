module Thousand

module Game =
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

    type Score = { Player1: int; Player2: int; Player3: int }

    type Deck = Card list
    type Cards = Card list
    
    type ShuffledCards = { Stock : Cards; Player1 : Cards; Player2: Cards; Player3 : Cards } 

    type BidState =
        | Pass
        | Obligated
        | Bid of uint16

    type BiddingState = { Bids: Map<Player, BidState>; CurrentPlayer : Player; Cards: Map<Player, Cards> }
    type PlayRoundState = { BiddingWinner: Player
                            CurrentPlayer : Player
                            Cards: Map<Player, Cards>
                            CardsOnTable : Card list }

    type RoundState =
        | Shuffled of ShuffledCards
        | Bidding of BiddingState
        | PlayRound of PlayRoundState

    type PlayGameState = { Players : Players; Score:Score; RoundState : RoundState }

    type GameState =
        | Game of PlayGameState
        | Finished of Players * Score * winner:Player

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

    let newGame player1 player2 player3 = 
        let players : Players = { Player1 = player1; Player2 = player2; Player3 = player3 }
        let score = { Player1 = 0; Player2 = 0; Player3 = 0 }
        let shuffledCards = randomCardDeck rnd |> deckSplit
        let gameState = { Players = players; Score = score; RoundState = Shuffled shuffledCards }
        Game gameState

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

let init() =
    let canvas = Browser.document.getElementsByTagName_canvas().[0]
    canvas.width <- 1000.
    canvas.height <- 800.
    let ctx = canvas.getContext_2d()
    // The (!^) operator checks and casts a value to an Erased Union type
    // See http://fable.io/docs/interacting.html#Erase-attribute
    ctx.fillStyle <- !^"rgb(200,0,0)"
    ctx.fillRect (10., 10., 55., 50.)
    ctx.fillStyle <- !^"rgba(0, 0, 200, 0.5)"
    ctx.fillRect (30., 30., 55., 50.)

init()