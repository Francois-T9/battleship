import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { startGame, randomizeShips, setCellImage } from "./DOM-actions.js";
import "./styles.css";

const playerGameboard = Gameboard();
const computerGameboard = Gameboard();

startGame(playerGameboard, computerGameboard);
