import { Gameboard } from "./gameboard.js";
import { startGame } from "./start.js";
import { displayShips, randomizeShips } from "./dom.js";
import "./styles.css";

const playerGameboard = Gameboard();
const computerGameboard = Gameboard();

startGame(playerGameboard, computerGameboard);
