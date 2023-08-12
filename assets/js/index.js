
import Board from "./board.js";
window.onload = () => {
let board = new Board(); // creates a new game board
let id = 0
// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);
const generateNewID = () => {
    let idNum = id
    id++;
    return idNum
}

const populateBoard = function(board) {
    const gameboard = document.getElementById('gameboard')
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let newDiv = document.createElement('div');
            newDiv.id = generateNewID();
            newDiv.class = 'square'
            gameboard.appendChild(newDiv)
        }
    }
}
    console.log(generateNewID())
    populateBoard(board)
    // for loop, for loop board[i][j]
    //board[i][j] = currentSquare
    //gb = document.findElementByID('gameboard')
    //create new div with idNumber
    //append div to gameboard, give id = generateNewId(), give class .square for css style

// Your code here
}
