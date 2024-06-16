// some diagonal checking if its won may not work

const board = document.querySelector("main")
const info = document.querySelector("#result")
const form = document.querySelector("form")
const restart = document.querySelector("#restart")

for(let i = 1; i <= 9; i++) {
    let cell = document.createElement("div")
    let txt = document.createElement("p")
    cell.classList.add("cell")
    cell.appendChild(txt)
    board.appendChild(cell)
}

board.addEventListener("click", (event) => {
    let target = event.target
    let index = Array.from(target.parentNode.children).indexOf(target)
    updateBoard(index)
    checkIfWon()
    checkIfDrawn()

    if(Gameboard.result != null) {
        if(Gameboard.result != "draw") {
            info.textContent = `The winner is: ${Gameboard.result != 1 ?  document.querySelector("#player_one").value: document.querySelector("#player_two").value}`
        }
    }
})

restart.addEventListener("click", () => {
    location.reload()
})

function domUpdate(index) {
    let target = board.children[index]
    target.firstChild.textContent = Gameboard.move == "noughts" ? "X" : "O"
}

// This will store the basic data surrounding the game
Gameboard = {
    board: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    noughts: {name: "James"},
    crosses: {name: "Will"},
    move: "crosses"
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
        domUpdate(index)
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
            Gameboard.result = x == "N" ? "1" : "2"
        }
    }

    for(let i = 0; i <= 2; i++) {
        check(Gameboard.board[i * 3], Gameboard.board[i * 3 + 1], Gameboard.board[i * 3 + 2])
        check(Gameboard.board[i], Gameboard.board[i + 3], Gameboard.board[i + 6])
        check(Gameboard.board[i], Gameboard.board[i + 4], Gameboard.board[i + 8])
        check(Gameboard.board[i + 2], Gameboard.board[i + 4], Gameboard.board[i + 6])
    }
}

// Will check if the game is drawn
function checkIfDrawn() {
    const avalibleSpaces = Gameboard.board.filter((element) => {
        return element == "0"
    })
    if(avalibleSpaces.length <= 0) {
        Gameboard.result = "draw"
    }
}

// while(Gameboard.result == null) {
//     updateBoard(prompt(`Input position for ${Gameboard.move}`))
    // logBoard()
    // checkIfWon()
    // checkIfDrawn()
// }