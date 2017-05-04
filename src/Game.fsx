#load "Game.fs"

open Game

let player1 = Player1 (LocalHuman "Adam")
let player2 = Player2 (LocalHuman "Joe")
let player3 = Player3 (LocalHuman "Marcin")

let game = 
    let rnd = System.Random 1
    newGame player1 player2 player3 rnd

