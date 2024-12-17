import { Ship } from "./ship.js";
const setAttackMarker = (state) => {
  //state will be 1 if attack hits
  // and 0 if attack misses
};

//needs to make sure that the ships are not overlapping
const randomizeShips = () => {
  let ships = [];
  let shipsPosition = [];

  for (let i = 0; i < 5; i++) {
    // Create a ship with random length between 2 and 5
    let length = Math.floor(Math.random() * 4 + 2);
    let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

    let position;
    let validPlacement = false;

    while (!validPlacement) {
      // Generate random starting position
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);

      // Check if the ship fits within the board based on orientation
      if (
        (orientation === "horizontal" && col + length <= 10) ||
        (orientation === "vertical" && row + length <= 10)
      ) {
        position = { row, col, orientation };
        validPlacement = true;
      }
    }
    let ship = Ship(length, orientation, position, 0, false);
    ships.push(ship);
    shipsPosition.push(position);
  }

  return { ships, shipsPosition };
};

const displayShips = (gameboard, ships, position) => {
  const board = gameboard.getBoard();

  for (let i = 0; i < ships.length; i++) {
    gameboard.setShip(
      board,
      ships[i],

      position[i].row,
      position[i].col
    );
  }
};

const setCellImage = (cell, img) => {
  const imageContainer = document.createElement("img");
  imageContainer.src = img;

  cell.appendChild(imageContainer);
};

const clearBoard = (boardContainer, boardObject) => {
  boardContainer.innerHTML = "";
  for (let i = 0; i < boardObject.length; i++) {
    for (let j = 0; j < boardObject.length; j++) {
      boardObject[i][j] = 0;
    }
  }
};

export {
  clearBoard,
  displayShips,
  setAttackMarker,
  randomizeShips,
  setCellImage,
};
