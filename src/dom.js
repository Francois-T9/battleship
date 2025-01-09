import { Ship } from "./ship.js";
const setAttackMarker = (state) => {
  //state will be 1 if attack hits
  // and 0 if attack misses
};
const checkDistinct = (array) => {
  // Convert each [x, y] pair to a unique string representation
  const checkSet = new Set(array.map((pair) => JSON.stringify(pair)));

  // Compare the size of the set to the length of the array
  return checkSet.size === array.length;
};

const isShipOverlapping = (ships) => {
  const allPositions = [];
  for (let ship of ships) {
    allPositions.push(ship.positions);
  }
  const flatPostiions = allPositions.flat();
  return flatPostiions;
};
//needs to make sure that the ships are not overlapping
const randomizeShips = () => {
  let ships = [];

  for (let i = 0; i < 5; i++) {
    // Create a ship with random length between 2 and 5
    let length = Math.floor(Math.random() * 4 + 2);
    let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

    let shipPosition = [];
    let validPlacement = false;

    while (!validPlacement) {
      // Generate random starting position
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);

      // Check if the ship fits within the board based on orientation
      if (orientation === "horizontal" && col + length <= 10) {
        validPlacement = true;
        for (let j = 0; j < length; j++) {
          shipPosition[j] = [row, col + j];
        }
      } else if (orientation === "vertical" && row + length <= 10) {
        validPlacement = true;
        for (let k = 0; k < length; k++) {
          shipPosition[k] = [row + k, col];
        }
      }
    }
    let ship = Ship(length, orientation, shipPosition, 0, false);
    ships.push(ship);
  }

  return ships;
};

const displayShips = (gameboard, ships) => {
  const board = gameboard.getBoard();
  gameboard.attackedCoordinates = [];
  for (let i = 0; i < ships.length; i++) {
    gameboard.setShip(board, ships[i]);
  }
};

const setCellImage = (cell, img) => {
  const imageContainer = document.createElement("img");
  imageContainer.src = img;

  cell.appendChild(imageContainer);
};

//also need to clear gameBoard and ships
const clearBoard = (boardContainer, gameboard) => {
  const board = gameboard.getBoard();
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  const winnerMessage = document.querySelector(".winner-message");
  playerScore.textContent = "";
  computerScore.textContent = "";
  winnerMessage.style.display = "none";
  gameboard.ships = [];
  boardContainer.innerHTML = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = 0;
    }
  }
};

const displayScore = (container, text) => {
  container.textContent = text;
};

const containsSubarray = (array, x, y) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === x && array[i][1] === y) {
      return true;
    }
  }
  return false;
};

const findWinner = (userGameboard, computerGameboard) => {
  const winnerMessageContainer = document.querySelector(".winner-message");
  const computerScore = document.querySelector(".computer-score");
  const userScore = document.querySelector(".player-score");
  const winnerParagraph = document.querySelector(".winner-message p");
  if (userGameboard.allShipsSunk()) {
    computerScore.style.display = "none";
    userScore.style.display = "none";
    winnerMessageContainer.style.display = "";

    displayScore(winnerParagraph, "Computer won !");
  } else if (computerGameboard.allShipsSunk()) {
    computerScore.style.display = "none";
    userScore.style.display = "none";
    winnerMessageContainer.style.display = "";

    displayScore(winnerParagraph, "User won !");
  }
};

const toggleScore = () => {
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");

  playerScore.style.display = "";
  computerScore.style.display = "";
};

export {
  clearBoard,
  displayShips,
  setAttackMarker,
  randomizeShips,
  setCellImage,
  displayScore,
  containsSubarray,
  findWinner,
  isShipOverlapping,
  checkDistinct,
  toggleScore,
};
