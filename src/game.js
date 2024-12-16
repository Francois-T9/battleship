import { setCellImage } from "./dom.js";
import missImg from "./img/icons8-red-cross-48.png";
import hitImg from "./img/icons8-crossed-swords-48.png";

//should manage the rounds between player and computer
const game = (playerGameboard, computerGameboard) => {
  const playerTurn = false;
  const computerTurn = false;

  const getCellId = (cell) => {
    //should return attackX and attackY coordinates
    cell.forEach((cell) => {
      cell.addEventListener("click", () => {
        const cellX = `${cell.className}-${cell.id}`.split("-")[3];
        const cellY = `${cell.className}-${cell.id}`.split("-")[4];

        setCellImage(cell, missImg);
        console.log(cellX, cellY);
        // board.receiveAttack(board);

        console.log(playerGameboard);
        return { cellX, cellY };
      });
    });
  };
  getCellId(document.querySelectorAll(`.${playerGameboard.className}-cell`));
};
export { game };
