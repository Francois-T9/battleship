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

export function Gameboard() {
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
    ships: [],
    getBoard() {
      return board;
    },

    setShip(board, ship, x, y) {
      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = 1;
      }
      this.ships.push(ship);
      return board;
    },
    missedHits: 0,
    missedAttacksCoordinates: [],
    hitAttackCoordinates: [],

    receiveAttack(board, ship, attackX, attackY) {
      //need to make sure to not attack the same cell twice
      if (
        board[attackX][attackY] === 0 ||
        containsSubArray(this.hitAttackCoordinates, [attackX, attackY])
      ) {
        this.missedHits++;
        this.missedAttacksCoordinates.push([attackX, attackY]);
      } else {
        ship.hit();
        this.hitAttackCoordinates.push([attackX, attackY]);
      }
    },

    allShipsSunk() {
      let numberOfShipsSunk = 0;
      for (let ship of this.ships) {
        if (ship.numberOfHits >= ship.length) {
          numberOfShipsSunk++;
        }
      }
      return numberOfShipsSunk;
      // if (numberOfShipsSunk === this.ships.length) return true;
      // else return false;
    },
  };
}

export function Player(name) {
  return { name };
}

function containsSubArray(array, subArray) {
  return array.some(
    (item) =>
      Array.isArray(item) &&
      item.length === subArray.length &&
      item.every((value, index) => value === subArray[index])
  );
}
