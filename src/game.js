import {
  setCellImage,
  displayScore,
  containsSubarray,
  findWinner,
} from "./dom.js";
import missImg from "./img/icons8-red-cross-48.png";
import hitImg from "./img/icons8-crossed-swords-48.png";

// Manages the rounds between the player and the computer
const game = (
  playerGameboard,
  computerGameboard,
  playerBoardObject,
  computerBoardObject
) => {
  let turnState = 1; // 1 for user turn, 0 for computer turn
  let currentPlayer = "User";

  // Function for the player's turn
  const userPlay = () => {
    const userCells = document.querySelectorAll(
      `.${playerGameboard.className}-cell`
    );
    userCells.forEach((cell) => {
      // Remove previous listeners to prevent multiple event bindings
      cell.removeEventListener("click", handleUserClick);

      // Add a listener for user clicks
      cell.addEventListener("click", handleUserClick, { once: true });
    });
  };

  const handleUserClick = (event) => {
    const cell = event.target;
    const cellX = `${cell.className}-${cell.id}`.split("-")[3] - 1;
    const cellY = `${cell.className}-${cell.id}`.split("-")[4] - 1;
    if (
      !containsSubarray(playerBoardObject.attackedCoordinates, cellX, cellY)
    ) {
      if (playerBoardObject.receiveAttack(cellX, cellY)) {
        setCellImage(cell, hitImg);
        displayScore(`Player attacks ${cellX}-${cellY} and hits!`);
      } else {
        setCellImage(cell, missImg);
        displayScore(`Player attacks ${cellX}-${cellY} and misses!`);
      }
    }
    findWinner(playerBoardObject, computerBoardObject);

    if (playerBoardObject.allShipsSunk()) {
      console.log("All ships sunk");
      return -1;
    }

    turnState = 0; // Switch to computer's turn
    computerPlay(); // Start the computer's turn
  };

  // Function for the computer's turn
  const computerPlay = () => {
    const computerCells = document.querySelectorAll(
      `.${computerGameboard.className}-cell`
    );

    // Simulate computer attacking a random cell
    //make sure that the computer does not attack an
    //already marked cell
    const randomCell =
      computerCells[Math.floor(Math.random() * computerCells.length)];
    const cellX = `${randomCell.className}-${randomCell.id}`.split("-")[3] - 1;
    const cellY = `${randomCell.className}-${randomCell.id}`.split("-")[4] - 1;

    if (
      !containsSubarray(computerBoardObject.attackedCoordinates, cellX, cellY)
    ) {
      if (computerBoardObject.receiveAttack(cellX, cellY)) {
        setCellImage(randomCell, hitImg);
        displayScore(`Computer attacks ${cellX}-${cellY} and hits!`);
      } else {
        setCellImage(randomCell, missImg);
        displayScore(`Computer attacks ${cellX}-${cellY} and misses!`);
      }
    }

    if (computerBoardObject.allShipsSunk()) {
      console.log("All computer ships sunk");
    }

    turnState = 1; // Switch back to the player's turn
    userPlay(); // Start the player's turn
  };

  if (turnState === 1) {
    userPlay();
  }
};

export { game };
