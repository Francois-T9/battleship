import { renderGameboard } from "./render.js";
import {
  randomizeShips,
  displayShips,
  clearBoard,
  isShipOverlapping,
  checkDistinct,
  toggleScore,
} from "./dom.js";
import { game } from "./game.js";
const startGame = (playerGameboard, computerGameboard) => {
  //board containers
  const playerGameboardContainer = document.querySelector(".player-board");
  const computerGameboardContainer = document.querySelector(".computer-board");
  // buttons
  const startGameButton = document.getElementById("start-game");
  const randomizeButton = document.getElementById("randomize-ships");

  const acceptName = document.getElementById("select-name-input");

  //name input
  const playerNameInput = document.getElementById("player-name");
  const playerInputForm = document.querySelector(".player-name-input");

  //board object
  const playerBoard = playerGameboard.getBoard();
  const computerBoard = computerGameboard.getBoard();
  const scoreBoard = document.querySelector(".score-board");

  //event listeners
  randomizeButton.addEventListener("click", () => {
    const playerShips = randomizeShips();
    const computerShips = randomizeShips();
    scoreBoard.style.display = "";
    toggleScore();

    clearBoard(playerGameboardContainer, playerGameboard);
    clearBoard(computerGameboardContainer, computerGameboard);

    displayShips(playerGameboard, playerShips);
    displayShips(computerGameboard, computerShips);

    renderGameboard(playerBoard, playerGameboardContainer);
    renderGameboard(computerBoard, computerGameboardContainer);
    game(
      playerGameboardContainer,
      computerGameboardContainer,
      playerGameboard,
      computerGameboard
    );
  });

  startGameButton.addEventListener("click", () => {
    playerInputForm.style.visibility = "visible";
    acceptName.addEventListener(
      "click",
      () => {
        scoreBoard.style.display = "";
        randomizeButton.style.display = "";

        let nameValue = playerNameInput.value;
        displayPlayerName(nameValue);
        playerInputForm.style.visibility = "hidden";
        startGameButton.style.visibility = "hidden";
        startGameButton.style.display = "none";

        let playerShips = randomizeShips();
        let computerShips = randomizeShips();

        while (!checkDistinct(isShipOverlapping(playerShips))) {
          playerShips = randomizeShips();
        }

        while (!checkDistinct(isShipOverlapping(computerShips))) {
          computerShips = randomizeShips();
        }

        displayShips(playerGameboard, playerShips);
        displayShips(computerGameboard, computerShips);

        renderGameboard(playerBoard, playerGameboardContainer);
        renderGameboard(computerBoard, computerGameboardContainer);

        game(
          playerGameboardContainer,
          computerGameboardContainer,
          playerGameboard,
          computerGameboard
        );
      },
      { once: true }
    );
  });

  const displayPlayerName = (name) => {
    const playerNameDisplay = document.querySelector(".player-one >h2");
    playerNameDisplay.textContent = name;
  };
};

export { startGame };
