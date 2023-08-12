
import Board from "./board.js";
window.onload = () => {
let board = new Board(); // creates a new game board
let id = 0
// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);
const generateNewID = () => {
    let idNum = id;
    id++;
    return idNum;
}
const gameboard = document.getElementById('gameboard');
const populateBoard = function(board) {
    console.log(board)
    for (let i = 0; i < board.grid.length; i++) {
        for (let j = 0; j < board.grid[i].length; j++) {
            console.log(`i `, board.grid[i][j])
            let newDiv = document.createElement('div');
            newDiv.id = `${i}, ${j}`;
            newDiv.className = 'square';
            gameboard.appendChild(newDiv);
        }
    }
}

    populateBoard(board)
    // for loop, for loop board[i][j]
    //board[i][j] = currentSquare
    //gb = document.findElementByID('gameboard')
    //create new div with idNumber
    //append div to gameboard, give id = generateNewId(), give class .square for css style

gameboard.addEventListener("click", (e) => {
    const coor = e.target.id.split(", ");
    if (!board.isGameOver()) {
        if (board.makeHit(coor[0], coor[1])) {
            e.target.style.backgroundColor = "green";
            e.target.innerText = board.grid[coor[0]][coor[1]];
            // console.log(board.grid[coor[0], coor[1]]);
        } else {
            e.target.style.backgroundColor = 'red';
        }
        if (board.isGameOver()) {
            document.getElementById("gameover").innerText = "GAME OVER!";
        }
    }




});

}
