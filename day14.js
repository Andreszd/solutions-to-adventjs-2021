function missingReindeer(ids) {
  let greaterNumber = ids[0];

  if (!ids.includes(0)) return 0;

  const sum = ids.reduce((acc, current) => {
    if (current >= greaterNumber) greaterNumber = current;
    return acc + current;
  });

  let missingId = sumNNumbers(greaterNumber) - sum;

  return missingId === 0 ? greaterNumber + 1 : missingId;
}
function sumNNumbers(num) {
  return (num * (num + 1)) / 2;
}
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
