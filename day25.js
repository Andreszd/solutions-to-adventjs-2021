function canMouseEat(direction, game) {
  let finded = false;
  const MOUSE = 'm';
  const moveSet = {
    down: ({ direction, row, col, game }) =>
      canMouve({ direction, row, col, game }) &&
      isEat({ row: row + 1, col, game }),
    up: ({ direction, row, col, game }) =>
      canMouve({ direction, row, col, game }) &&
      isEat({ row: row - 1, col, game }),
    left: ({ direction, row, col, game }) =>
      canMouve({ direction, row, col, game }) &&
      isEat({ row, col: col - 1, game }),
    right: ({ direction, row, col, game }) =>
      canMouve({ direction, row, col, game }) &&
      isEat({ row, col: col + 1, game }),
  };
  for (let row = 0; row < game.length && !finded; row++) {
    for (let col = 0; col < game[row].length && !finded; col++) {
      if (game[row][col] === MOUSE) {
        if (moveSet[direction]({ direction, row, col, game })) finded = true;
      }
    }
  }
  return finded;
}
function isEat({ row, col, game }) {
  const EAT = '*';
  return game[row][col] === EAT;
}
function canMouve({ direction, row, col, game }) {
  if (direction === 'up' && row - 1 >= 0) return true;
  if (direction === 'down' && row + 1 < game.length) return true;
  if (direction === 'right' && col + 1 < game[row].length) return true;
  if (direction === 'left' && col - 1 >= 0) return true;
  return false;
}
