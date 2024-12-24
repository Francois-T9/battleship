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

    setShip(board, ship) {
      //make sure that the function does not modify the size of board
      //i.e the ship need to fit

      for (let i = 0; i < ship.length; i++) {
        let x = ship.positions[i][0];
        let y = ship.positions[i][1];
        board[x][y] = 1;
      }
      this.ships.push(ship);
      return board;
    },
    attackedCoordinates: [],

    receiveAttack(attackX, attackY) {
      //check if attackX and attackY corresponds to an exact position
      //of a a ship, and return this exact ship

      //now it works, but the Ship object needs to contain all
      //the positions taken by the ship
      this.attackedCoordinates.push([attackX, attackY]);
      for (let ship of this.ships) {
        for (let position of ship.positions) {
          if (position[0] == attackX && position[1] == attackY) {
            ship.hit();
            ship.isSunk();
            return true;
          }
        }
      }
    },
    allShipsSunk() {
      let numberOfShipsSunk = 0;
      for (let ship of this.ships) {
        if (ship.numberOfHits >= ship.length) {
          numberOfShipsSunk++;
        }
      }
      // return numberOfShipsSunk;
      if (numberOfShipsSunk === this.ships.length) return true;
      else return false;
    },
  };
}
