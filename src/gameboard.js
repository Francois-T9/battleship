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
      //make sure that the function does not modify the size of board
      //i.e the ship need to fit
      for (let i = 0; i < ship.length; i++) {
        if (ship.orientation == "horizontal") {
          board[x][y + i] = 1;
        } else {
          board[x + i][y] = 1;
        }
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
        return false;
      } else {
        ship.hit();
        this.hitAttackCoordinates.push([attackX, attackY]);
        return true;
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

function containsSubArray(array, subArray) {
  return array.some(
    (item) =>
      Array.isArray(item) &&
      item.length === subArray.length &&
      item.every((value, index) => value === subArray[index])
  );
}
