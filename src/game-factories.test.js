// import { Ship, Gameboard } from "./game-factories.js";

// // test("Ship of length 0", () => {
// //   const ship1 = Ship(5, 0, false);

// //   expect(ship1.numberOfHits).toBe(0);
// // });

// // test("Ship of length 0", () => {
// //   const ship1 = Ship(5, 0, false);

// //   ship1.hit();
// //   ship1.hit();
// //   ship1.hit();
// //   expect(ship1.numberOfHits).toBe(3);
// // });

// const ship1 = Ship(5, 0, false);
// const gameboard = Gameboard();
// const board1 = gameboard.getBoard();

// test("An initialized array is full of zeros", () => {
//   expect(board1[0][0]).toBe(0);
// });

// test("Place a ship of length 5 at position (0;0)", () => {
//   expect(gameboard.setShip(board1, ship1, 0, 0)[0][1]).toBe(1);
// });

// test("Attack the ship 2  times and miss the 2 attacks", () => {
//   const ship2 = Ship(5, 0, false);
//   const gameboard2 = Gameboard();
//   const board2 = gameboard2.getBoard();

//   gameboard2.setShip(board2, ship2, 0, 0);

//   gameboard2.receiveAttack(board2, ship2, 0, 5);
//   gameboard2.receiveAttack(board2, ship2, 0, 6);

//   expect(gameboard2.missedHits).toBe(2);
// });

// test("Attack the ship 3 times and don't miss", () => {
//   const ship3 = Ship(5, 0, false);
//   const gameboard3 = Gameboard();
//   const board3 = gameboard3.getBoard();

//   gameboard3.setShip(board3, ship3, 0, 0);

//   gameboard3.receiveAttack(board3, ship3, 0, 0);
//   gameboard3.receiveAttack(board3, ship3, 0, 1);
//   gameboard3.receiveAttack(board3, ship3, 0, 4);

//   expect(ship3.numberOfHits).toBe(3);
// });

// test("Give the coordinates of an attaack if it misses", () => {
//   const ship6 = Ship(5, 0, false);
//   const gameboard6 = Gameboard();
//   const board6 = gameboard6.getBoard();

//   gameboard6.setShip(board6, ship6, 0, 0);

//   gameboard6.receiveAttack(board6, ship6, 0, 6);
//   gameboard6.receiveAttack(board6, ship6, 0, 7);

//   expect(gameboard6.missedAttacksCoordinates[1]).toStrictEqual([0, 7]);
// });

// test("Attack an already attacked cell should miss", () => {
//   const ship5 = Ship(5, 0, false);
//   const gameboard5 = Gameboard();
//   const board5 = gameboard5.getBoard();

//   gameboard5.setShip(board5, ship5, 0, 0);

//   gameboard5.receiveAttack(board5, ship5, 0, 0);
//   gameboard5.receiveAttack(board5, ship5, 0, 0);
//   gameboard5.receiveAttack(board5, ship5, 0, 0);
//   gameboard5.receiveAttack(board5, ship5, 0, 0);

//   expect(gameboard5.missedHits).toBe(3);
// });

// test("The only ship in the game is sunk", () => {
//   const ship4 = Ship(2, 0, false);
//   const gameboard4 = Gameboard();
//   const board4 = gameboard4.getBoard();

//   gameboard4.setShip(board4, ship4, 0, 0);

//   gameboard4.receiveAttack(board4, ship4, 0, 0);
//   gameboard4.receiveAttack(board4, ship4, 0, 1);

//   expect(gameboard4.allShipsSunk()).toBeTruthy();
// });

// test("Add 2 ships to the gameboard and hit them diferent number of times", () => {
//   const ship6 = Ship(2, 0, false);
//   const ship7 = Ship(3, 0, false);

//   const gameboard7 = Gameboard();
//   const board7 = gameboard7.getBoard();

//   gameboard7.setShip(board7, ship6, 0, 0);
//   gameboard7.setShip(board7, ship7, 1, 0);

//   gameboard7.receiveAttack(board7, ship6, 0, 0);
//   gameboard7.receiveAttack(board7, ship6, 0, 1);

//   gameboard7.receiveAttack(board7, ship7, 1, 0);
//   gameboard7.receiveAttack(board7, ship7, 1, 1);
//   gameboard7.receiveAttack(board7, ship7, 1, 2);

//   expect(ship7.numberOfHits).toBe(3);
// });

// test("All the ships in the gameboard have been sunk", () => {
//   const ship6 = Ship(2, 0, false);
//   const ship7 = Ship(2, 0, false);
//   const ship8 = Ship(2, 0, false);

//   const gameboard7 = Gameboard();
//   const board7 = gameboard7.getBoard();

//   gameboard7.setShip(board7, ship6, 0, 0);
//   gameboard7.setShip(board7, ship7, 1, 0);
//   gameboard7.setShip(board7, ship8, 2, 0);

//   gameboard7.receiveAttack(board7, ship6, 0, 0);
//   gameboard7.receiveAttack(board7, ship6, 0, 1);

//   gameboard7.receiveAttack(board7, ship7, 1, 0);
//   gameboard7.receiveAttack(board7, ship7, 1, 1);

//   gameboard7.receiveAttack(board7, ship8, 2, 0);
//   gameboard7.receiveAttack(board7, ship8, 2, 1);

//   expect(gameboard7.allShipsSunk()).toBe(3);
// });
