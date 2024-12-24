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
    const acceptName = document.getElementById("select-name-input");
    const cancelNameSelection = document.getElementById("cancel-name-input");
    const scoreBoard = document.querySelector(".score-board");
    playerInputForm.style.visibility = "visible";
    acceptName.addEventListener("click", () => {
      scoreBoard.style.display = "";
      let nameValue = playerNameInput.value;
      displayPlayerName(nameValue);
      playerInputForm.style.visibility = "hidden";
      startGameButton.style.visibility = "hidden";
      //create random ships and positions for user
      let playerShips = randomizeShips();
      //create random ships and positions for user
      let computerShips = randomizeShips();

      while (!checkDistinct(isShipOverlapping(playerShips))) {
        playerShips = randomizeShips();
      }

      while (!checkDistinct(isShipOverlapping(computerShips))) {
        computerShips = randomizeShips();
      }
      // console.log(checkDistinct(isShipOverlapping(playerShips)));

      //set ships at random positions

      displayShips(playerGameboard, playerShips);
      displayShips(computerGameboard, computerShips);

      //display boards

      renderGameboard(playerBoard, playerGameboardContainer);
      renderGameboard(computerBoard, computerGameboardContainer);

      //starts the game
      game(
        playerGameboardContainer,
        computerGameboardContainer,
        playerGameboard,
        computerGameboard
      );
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
