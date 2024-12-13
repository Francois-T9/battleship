import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import missImg from "./img/icons8-red-cross-48.png";
import hitImg from "./img/icons8-crossed-swords-48.png";

const renderGameboard = (board, gameboardContainer) => {
  //functions
  const createBoard = (container) => {
    container.style.visibility = "";
    for (let i = 1; i < board.length + 1; i++) {
      for (let j = 1; j < board.length + 1; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", `${container.className}-cell`);
        cell.setAttribute("id", `${i}-${j}`);

        container.appendChild(cell);
        if (board[i - 1][j - 1] === 1) {
          //give a different color for each ship
          cell.style.backgroundColor = "grey";
        }
      }
    }
  };

  const getCellId = (cell) => {
    //should return attackX and attackY coordinates
    cell.forEach((cell) => {
      cell.addEventListener("click", () => {
        const cellX = `${cell.className}-${cell.id}`.split("-")[3];
        const cellY = `${cell.className}-${cell.id}`.split("-")[4];

        setCellImage(cell, missImg);

        // board.receiveAttack(board);
        return { cellX, cellY };
      });
    });
  };

  //function call
  createBoard(gameboardContainer);
  getCellId(document.querySelectorAll(`.${gameboardContainer.className}-cell`));
};

const startGame = (playerGameboard, computerGameboard) => {
  //containers
  const playerGameboardContainer = document.querySelector(".player-board");
  const computerGameboardContainer = document.querySelector(".computer-board");

  const startGameButton = document.getElementById("start-game");
  const playerNameInput = document.getElementById("player-name");
  const playerInputForm = document.querySelector(".player-name-input");

  //boards
  const playerBoard = playerGameboard.getBoard();
  const computerBoard = computerGameboard.getBoard();

  //event listeners

  startGameButton.addEventListener("click", () => {
    const acceptName = document.getElementById("select-name-input");
    const cancelNameSelection = document.getElementById("cancel-name-input");
    playerInputForm.style.visibility = "visible";

    acceptName.addEventListener("click", () => {
      let nameValue = playerNameInput.value;
      displayPlayerName(nameValue);
      playerInputForm.style.visibility = "hidden";
      startGameButton.style.visibility = "hidden";
      //create random ships
      const { ships: playerShips, shipsPosition: playerPositions } =
        randomizeShips();

      const computerShips = randomizeShips();

      //set ships at random positions

      for (let i = 0; i < playerShips.length; i++) {
        playerGameboard.setShip(
          playerBoard,
          playerShips[i],

          playerPositions[i].row,
          playerPositions[i].col
        );
      }

      //display boards

      renderGameboard(playerBoard, playerGameboardContainer);
      renderGameboard(computerBoard, computerGameboardContainer);
    });
    cancelNameSelection.addEventListener("click", () => {
      playerInputForm.style.visibility = "hidden";
    });
  });

  const displayPlayerName = (name) => {
    const playerNameDisplay = document.querySelector(".player-one >h2");
    playerNameDisplay.textContent = name;
  };
};

const setAttackMarker = (state) => {
  //state will be 1 if attack hits
  // and 0 if attack misses
};

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

    ships.push({ length, orientation });
    shipsPosition.push(position);
  }

  return { ships, shipsPosition };
};

// const randomizeShipPosition = () => {
//   return Math.floor(Math.random() * 10);
// };

const setCellImage = (cell, img) => {
  const imageContainer = document.createElement("img");
  imageContainer.src = img;

  cell.appendChild(imageContainer);
};

export { startGame, renderGameboard, randomizeShips, setCellImage };
