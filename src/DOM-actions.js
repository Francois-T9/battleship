import { Ship } from "./ship.js";
import missImg from "./img/icons8-red-cross-48.png";

const renderGameboard = (gameboard, gameboardContainer) => {
  const board = gameboard.getBoard();

  //functions
  const createBoard = (container) => {
    container.style.visibility = "";
    for (let i = 1; i < board.length + 1; i++) {
      for (let j = 1; j < board.length + 1; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", `${container.className}-cell`);
        cell.setAttribute("id", `${i}-${j}`);

        container.appendChild(cell);
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

        console.log(cellX, cellY);
        return { cellX, cellY };
      });
    });
  };

  //function call
  createBoard(gameboardContainer);
  getCellId(document.querySelectorAll(`.${gameboardContainer.className}-cell`));
};

const startGame = (playerGameboard, computerGameboard) => {
  const playerGameboardContainer = document.querySelector(".player-board");
  const computerGameboardContainer = document.querySelector(".computer-board");

  const startGameButton = document.getElementById("start-game");
  const playerNameInput = document.getElementById("player-name");
  const playerInputForm = document.querySelector(".player-name-input");

  startGameButton.addEventListener("click", () => {
    const acceptName = document.getElementById("select-name-input");
    const cancelNameSelection = document.getElementById("cancel-name-input");
    playerInputForm.style.visibility = "visible";

    acceptName.addEventListener("click", () => {
      let nameValue = playerNameInput.value;
      displayPlayerName(nameValue);
      playerInputForm.style.visibility = "hidden";

      renderGameboard(playerGameboard, playerGameboardContainer);
      renderGameboard(computerGameboard, computerGameboardContainer);
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
  for (let i = 0; i < 5; i++) {
    ships.push(Ship(Math.floor(Math.random() * 4 + 2), 0, false));
  }
  //returns an array of 5 ships with random length
  return ships;
};

const setCellImage = (cell, img) => {
  const imageContainer = document.createElement("img");
  imageContainer.src = img;

  cell.appendChild(imageContainer);
};
export { startGame, renderGameboard, randomizeShips, setCellImage };
