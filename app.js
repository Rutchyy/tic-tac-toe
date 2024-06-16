Gameboard = {
    board: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    noughts: {name: "James"},
    crosses: {name: "Will"},
    move: "noughts",
    result: null
}

function logBoard() {
    console.log("-------------")
    for(let i = 0; i < Gameboard.board.length; i += 3) {
        console.log(Gameboard.board[i] + " " + Gameboard.board[i + 1] + " " + Gameboard.board[i + 2])
    }
}

function updateBoard(index) {
    let updated;
    if(Gameboard.move == "noughts") {
        updated = "N"
        Gameboard.move = "crosses"
    } else {
        updated = "C"
        Gameboard.move = "noughts"
    }
    Gameboard.board.splice(index, 1, updated)
}

function check(x, y, z) {
    if(x == y && x == z && x != "0") {
        Gameboard.result = x == "N" ? "Noughts" : "Crosses"
    }
}

function checkIfWon() {
    for(let i = 0; i <= 3; i++) {
        check(Gameboard.board[i * 3], Gameboard.board[i * 3 + 1], Gameboard.board[i * 3 + 2])
        check(Gameboard.board[i], Gameboard.board[i + 3], Gameboard.board[i + 6])
        check(Gameboard.board[i], Gameboard.board[i + 4], Gameboard.board[i + 8])
        check(Gameboard.board[i + 2], Gameboard.board[i + 4], Gameboard.board[i + 6])
    }
}
while(Gameboard.result == null) {
    updateBoard(prompt(`Input position for ${Gameboard.move}`))
    logBoard()
    checkIfWon()
}

console.log("The winner is: " + Gameboard.result)