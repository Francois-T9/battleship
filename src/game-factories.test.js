import { Ship, Gameboard } from "./game-factories.js";

// test("Ship of length 0", () => {
//   const ship1 = Ship(5, 0, false);

//   expect(ship1.numberOfHits).toBe(0);
// });

// test("Ship of length 0", () => {
//   const ship1 = Ship(5, 0, false);

//   ship1.hit();
//   ship1.hit();
//   ship1.hit();
//   expect(ship1.numberOfHits).toBe(3);
// });

const ship1 = Ship(5, 0, false);
const gameboard = Gameboard(ship1, 0, 0);
const board1 = gameboard.getBoard();

test("An initialized array is full of zeros", () => {
  expect(board1[0][0]).toBe(0);
});

test("Place a ship of length 5 at position (0;0)", () => {
  expect(gameboard.setShip(board1)[0][1]).toBe(1);
});

test("Attack the ship 2  times and miss the 2 attacks", () => {
  const ship2 = Ship(5, 0, false);
  const gameboard2 = Gameboard(ship2, 0, 0);
  const board2 = gameboard2.getBoard();

  gameboard2.setShip(board2);

  gameboard2.receiveAttack(board2, 0, 5);
  gameboard2.receiveAttack(board2, 0, 6);

  expect(gameboard2.missedHits).toBe(2);
});

test("Attack the ship 3 times and don't miss", () => {
  const ship3 = Ship(5, 0, false);
  const gameboard3 = Gameboard(ship3, 0, 0);
  const board3 = gameboard3.getBoard();

  gameboard3.setShip(board3);

  gameboard3.receiveAttack(board3, 0, 0);
  gameboard3.receiveAttack(board3, 0, 1);
  gameboard3.receiveAttack(board3, 0, 4);

  expect(ship3.numberOfHits).toBe(3);
});

test("The only ship in the game is sunk", () => {
  const ship4 = Ship(2, 0, false);
  const gameboard4 = Gameboard(ship4, 0, 0);
  const board4 = gameboard4.getBoard();

  gameboard4.setShip(board4);

  gameboard4.receiveAttack(board4, 0, 0);
  gameboard4.receiveAttack(board4, 0, 1);

  expect(gameboard4.allShipsSunk()).toBeTruthy();
});
