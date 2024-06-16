// This will store the basic data surrounding the game
Gameboard = {
    board: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    noughts: {name: "James"},
    crosses: {name: "Will"},
    move: "noughts",
    result: null
}

// Prints the board to the console, will be decrepitated soon
function logBoard() {
    console.log("-------------")
    for(let i = 0; i < Gameboard.board.length; i += 3) {
        console.log(Gameboard.board[i] + " " + Gameboard.board[i + 1] + " " + Gameboard.board[i + 2])
    }
}

// Updates the game board, if the position isn't occupied
function updateBoard(index) {
    let updated;
    if(Gameboard.move == "noughts") {
        updated = "N"
        Gameboard.move = "crosses"
    } else {
        updated = "C"
        Gameboard.move = "noughts"
    }
    if(Gameboard.board[index] == "0") {
        Gameboard.board.splice(index, 1, updated)
    } else {
        console.log("That place is occupied, please enter another place!")
        if(Gameboard.move == "noughts") {
            Gameboard.move = "crosses"
        } else {
            Gameboard.move = "noughts"
        }
    }
}

// Will find out if the position is won by either player
function checkIfWon() {
    function check(x, y, z) {
        if(x == y && x == z && x != "0") {
            Gameboard.result = x == "N" ? "Noughts" : "Crosses"
        }
    }

    for(let i = 0; i <= 2; i++) {
        check(Gameboard.board[i * 3], Gameboard.board[i * 3 + 1], Gameboard.board[i * 3 + 2])
        check(Gameboard.board[i], Gameboard.board[i + 3], Gameboard.board[i + 6])
        check(Gameboard.board[i], Gameboard.board[i + 4], Gameboard.board[i + 8])
        check(Gameboard.board[i + 2], Gameboard.board[i + 4], Gameboard.board[i + 6])
    }
}

function checkIfDrawn() {
    // use a filter
    // then do dom stuff
}

while(Gameboard.result == null) {
    updateBoard(prompt(`Input position for ${Gameboard.move}`))
    logBoard()
    checkIfWon()
    checkIfDrawn()
}

console.log("The winner is: " + Gameboard.result)