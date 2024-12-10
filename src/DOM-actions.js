const addPlayerName = (() => {
  const startGameButton = document.getElementById("start-game");
  const playerNameInput = document.getElementById("player-name");
  const playerInputForm = document.querySelector(".player-name-input");
  const mainContainer = document.querySelector(".container");

  startGameButton.addEventListener("click", () => {
    const acceptName = document.getElementById("select-name-input");
    const cancelNameSelection = document.getElementById("cancel-name-input");
    playerInputForm.style.visibility = "visible";

    acceptName.addEventListener("click", () => {
      let nameValue = playerNameInput.value;
      displayPlayerName(nameValue);
      console.log(nameValue);
      playerInputForm.style.visibility = "hidden";
    });
    cancelNameSelection.addEventListener("click", () => {
      playerInputForm.style.visibility = "hidden";
    });
  });

  const displayPlayerName = (name) => {
    const playerNameDisplay = document.querySelector(".player-one >h2");
    playerNameDisplay.textContent = name;
  };
})();

const renderGameboard = (gameboard) => {
  const board = gameboard.getBoard();
  console.log(board);

  const createBoard = (() => {
    const boardContainer = document.querySelector(".board");
    console.log(boardContainer);
    for (let i = 1; i < board.length + 1; i++) {
      for (let j = 1; j < board.length + 1; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${i}-${j}`);

        boardContainer.appendChild(cell);
      }
    }
  })();
};

export { addPlayerName, renderGameboard };
