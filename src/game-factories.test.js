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
//   expect(ship1.numberOfHits).toBe(2);
// });

test("An initialized array is full of zeros", () => {
  const board1 = Gameboard();
  expect(board1[0][0]).toBe(0);
});
