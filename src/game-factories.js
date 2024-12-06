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
  const board = (() => {
    const tempBoard = [];
    for (let i = 0; i < 10; i++) {
      tempBoard[i] = [];
      for (let j = 0; j < 10; j++) {
        tempBoard[i][j] = 0;
      }
    }
    return tempBoard;
  })();

  return {
    getBoard() {
      return board;
    },

    setShip(board) {
      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = 1;
      }
      return board;
    },
    missedHits: 0,
    attackedCoordinates: [],

    receiveAttack(board, attackX, attackY) {
      //need to make sure to not attack the same cell twice
      this.attackedCoordinates.push(attackX, attackY);
      if (board[attackX][attackY] === 0) {
        this.missedHits++;
      } else {
        ship.hit();
      }
    },

    allShipsSunk() {
      //check all the ships not only one
      if (ship.numberOfHits >= ship.length) {
        return true;
      } else return false;
    },
  };
}
