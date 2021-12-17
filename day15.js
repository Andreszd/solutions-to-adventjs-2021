function checkSledJump(heights) {
  let flag = false;
  let isCorrupted = false;

  heights.forEach((height, idx) => {
    if (heights[idx + 1] === height) isCorrupted = true;
    if (heights[idx + 1] > height) flag = true;
    if (heights[idx + 1] < height) flag = false;
  });

  return isCorrupted ? false : flag === false;
}

checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
