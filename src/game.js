import { setCellImage } from "./dom.js";
import missImg from "./img/icons8-red-cross-48.png";
import hitImg from "./img/icons8-crossed-swords-48.png";

//should manage the rounds between player and computer
const game = (
  playerGameboard,
  computerGameboard,
  playerBoardObject,
  computerBoardObject
) => {
  const playerBoard = playerBoardObject.getBoard();
  const playerShips = playerBoardObject.ships;

  const getCellId = (cell) => {
    // Should return attackX and attackY coordinates
    cell.forEach((cell) => {
      cell.addEventListener("click", () => {
        const cellX = `${cell.className}-${cell.id}`.split("-")[3] - 1;
        const cellY = `${cell.className}-${cell.id}`.split("-")[4] - 1;

        console.log("Player attacks cell: ", `${cellX}-${cellY}`);

        playerBoardObject.receiveAttack(cellX, cellY);
        // console.log(playerBoardObject.getBoard());
        // console.log(playerShips);
        return { cellX, cellY };
      });
    });
  };

  getCellId(document.querySelectorAll(`.${playerGameboard.className}-cell`));
};
export { game };
