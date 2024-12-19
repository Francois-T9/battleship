export function Ship(length, orientation, positions, numberOfHits, sunk) {
  return {
    length: length,
    orientation: orientation,
    positions: positions,
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
