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
  const playerTurn = false;
  const computerTurn = false;

  const playerBoard = playerBoardObject.getBoard();
  const playerShips = playerBoardObject.ships;

  let playerMissedHits = 0;

  const getCellId = (cell) => {
    //should return attackX and attackY coordinates
    cell.forEach((cell) => {
      cell.addEventListener("click", () => {
        const cellX = `${cell.className}-${cell.id}`.split("-")[3] - 1;
        const cellY = `${cell.className}-${cell.id}`.split("-")[4] - 1;

        let playerHit = false;
        playerShips.forEach((ship) => {
          //ships needs to have a "position" argument so we know
          //which ship has been hit
          if (
            playerBoardObject.receiveAttack(playerBoard, ship, cellX, cellY)
          ) {
            playerHit = true;
            setCellImage(cell, hitImg);
            console.log(
              "Player attacks cell : ",
              `${cellX}-${cellY}`,
              "and hits",
              `${ship.orientation}`,
              "ship of length ",
              `${ship.length}`
            );
          }
        });
        if (!playerHit) {
          playerMissedHits++;
          setCellImage(cell, missImg);
        }
        console.log(playerShips);
        return { cellX, cellY };
      });
    });
  };
  getCellId(document.querySelectorAll(`.${playerGameboard.className}-cell`));
};
export { game };
