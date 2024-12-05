export function Ship(length, numberOfHits, sunk) {
  return {
    length: length,
    numberOfHits: numberOfHits,
    sunk: sunk,

    hit() {
      this.numberOfHits++;
    },
    isSunk() {
      if (this.numberOfHits > this.length) {
        this.sunk = true;
      } else this.sunk = false;
    },
  };
}

export function Gameboard(ship, x, y) {
  const initializeGameboard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  };
  const board1 = initializeGameboard();

  const setShip = () => {};
  return { board1 };
}
