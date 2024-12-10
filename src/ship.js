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
