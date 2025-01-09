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
  let gameOver = false;
  // Function for the player's turn
  const userPlay = () => {
    if (gameOver) return;
    //the user attacks computer cells
    const computerCells = document.querySelectorAll(
      `.${computerGameboard.className}-cell`
    );
    computerCells.forEach((cell) => {
      // Remove previous listeners to prevent multiple event bindings
      cell.removeEventListener("click", handleUserClick);

      // Add a listener for user clicks
      cell.addEventListener("click", handleUserClick, { once: true });
    });
  };

  const handleUserClick = (event) => {
    if (gameOver) return;
    let cell = event.target.closest(`.${computerGameboard.className}-cell`);
    if (!cell) {
      console.error("Click did not target a valid cell.");
      return;
    }
    let cellX = `${cell.className}-${cell.id}`.split("-")[3] - 1;
    let cellY = `${cell.className}-${cell.id}`.split("-")[4] - 1;
    if (
      containsSubarray(computerBoardObject.attackedCoordinates, cellX, cellY)
    ) {
      displayScore(
        document.querySelector(".player-score p"),
        `Choose another cell`
      );
      cellX = `${cell.className}-${cell.id}`.split("-")[3] - 1;
      cellY = `${cell.className}-${cell.id}`.split("-")[4] - 1;
      return;
    }
    if (computerBoardObject.receiveAttack(cellX, cellY)) {
      setCellImage(cell, hitImg);
      displayScore(
        document.querySelector(".player-score p"),
        `Player attacks ${cellX}-${cellY} and hits!`
      );
    } else {
      setCellImage(cell, missImg);
      displayScore(
        document.querySelector(".player-score p"),
        `Player attacks ${cellX}-${cellY} and misses!`
      );
    }
    if (computerBoardObject.allShipsSunk()) {
      gameOver = true;
    }
    findWinner(playerBoardObject, computerBoardObject);

    turnState = 0; // Switch to computer's turn
    computerPlay(); // Start the computer's turn
  };

  // Function for the computer's turn
  const computerPlay = () => {
    if (gameOver) return;
    const userCells = document.querySelectorAll(
      `.${playerGameboard.className}-cell`
    );

    // Simulate computer attacking a random cell
    //make sure that the computer does not attack an
    //already marked cell
    let randomCell = userCells[Math.floor(Math.random() * userCells.length)];
    let cellX = `${randomCell.className}-${randomCell.id}`.split("-")[3] - 1;
    let cellY = `${randomCell.className}-${randomCell.id}`.split("-")[4] - 1;
    while (
      containsSubarray(playerBoardObject.attackedCoordinates, cellX, cellY)
    ) {
      randomCell = userCells[Math.floor(Math.random() * userCells.length)];
      cellX = `${randomCell.className}-${randomCell.id}`.split("-")[3] - 1;
      cellY = `${randomCell.className}-${randomCell.id}`.split("-")[4] - 1;
    }
    if (playerBoardObject.receiveAttack(cellX, cellY)) {
      setCellImage(randomCell, hitImg);
      displayScore(
        document.querySelector(".computer-score p"),
        `Computer attacks ${cellX}-${cellY} and hits!`
      );
    } else {
      setCellImage(randomCell, missImg);
      displayScore(
        document.querySelector(".computer-score p"),
        `Computer attacks ${cellX}-${cellY} and misses!`
      );
    }

    if (playerBoardObject.allShipsSunk()) {
      console.log("All player ships sunk");
      gameOver = true;
    }
    findWinner(playerBoardObject, computerBoardObject);

    turnState = 1; // Switch back to the player's turn
    userPlay(); // Start the player's turn
  };

  if (turnState === 1) {
    userPlay();
  }
};

export { game };
