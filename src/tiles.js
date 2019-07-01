export const createTiles = (length) => {
  const tiles = new Array(length ** 2);
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      const index = row * length + col;
      const defaultRow = row + 1;
      const defaultCol = col + 1;
      tiles[index] = {
        defaultRow,
        defaultCol,
        row: defaultRow,
        col: defaultCol
      }
    }
  }
  return tiles;
}

export const canMove = (target, blank) => {
  const deltaX = Math.abs(target.col - blank.col);
  const deltaY = Math.abs(target.row - blank.row);
  const delta = deltaX + deltaY;
  return delta === 1;
}

export const swap = (tiles, target, blank) =>
  tiles
    .map(tile => {
      switch (tile) {
        case target:
          return {...blank}
        case blank:
          return {...target}
        default:
          return tile;
      }
    });