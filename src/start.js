import { renderGameboard } from "./render.js";
import { randomizeShips, displayShips, clearBoard } from "./dom.js";
import { game } from "./game.js";
const startGame = (playerGameboard, computerGameboard) => {
  //board containers
  const playerGameboardContainer = document.querySelector(".player-board");
  const computerGameboardContainer = document.querySelector(".computer-board");
  // buttons
  const startGameButton = document.getElementById("start-game");
  const randomizeButton = document.getElementById("randomize-ships");
  //name input
  const playerNameInput = document.getElementById("player-name");
  const playerInputForm = document.querySelector(".player-name-input");

  //board object
  const playerBoard = playerGameboard.getBoard();
  const computerBoard = computerGameboard.getBoard();

  //event listeners
  randomizeButton.addEventListener("click", () => {
    const { ships: playerShips, shipsPosition: playerPositions } =
      randomizeShips();
    const { ships: computerShips, shipsPosition: computerPositions } =
      randomizeShips();

    clearBoard(playerGameboardContainer, playerBoard);
    clearBoard(computerGameboardContainer, computerBoard);

    displayShips(playerGameboard, playerShips, playerPositions);
    displayShips(computerGameboard, computerShips, computerPositions);

    renderGameboard(playerBoard, playerGameboardContainer);
    renderGameboard(computerBoard, computerGameboardContainer);
  });

  startGameButton.addEventListener("click", () => {
    const acceptName = document.getElementById("select-name-input");
    const cancelNameSelection = document.getElementById("cancel-name-input");
    playerInputForm.style.visibility = "visible";

    acceptName.addEventListener("click", () => {
      let nameValue = playerNameInput.value;
      displayPlayerName(nameValue);
      playerInputForm.style.visibility = "hidden";
      startGameButton.style.visibility = "hidden";
      //create random ships and positions for user
      const { ships: playerShips, shipsPosition: playerPositions } =
        randomizeShips();
      //create random ships and positions for user
      const { ships: computerShips, shipsPosition: computerPositions } =
        randomizeShips();

      //set ships at random positions

      displayShips(playerGameboard, playerShips, playerPositions);
      displayShips(computerGameboard, computerShips, computerPositions);

      //display boards

      renderGameboard(playerBoard, playerGameboardContainer);
      renderGameboard(computerBoard, computerGameboardContainer);

      //starts the game
      game(playerGameboardContainer, computerGameboardContainer);
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

export { startGame };
