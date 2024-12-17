export function Ship(length, orientation, position, numberOfHits, sunk) {
  return {
    length: length,
    orientation: orientation,
    position: position,
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
