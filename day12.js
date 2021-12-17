function getMinJump(obstacles) {
  const way = getAllRoute(Math.max(...obstacles));
  let min = 0;

  way.forEach((point) => {});

  return min;
}

//const obstacles = [5, 3, 6, 7, 9];
//const obstacles = [2, 4, 6, 8, 10];
const obstacles = [14, 10, 8, 2, 3, 6];
getMinJump(obstacles); // -> 4
