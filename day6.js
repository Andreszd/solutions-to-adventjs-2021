function sumPairs(numbers = [], result) {
  let res = [];
  numbers.forEach((_, i) => {
    numbers.forEach((number, j) => {
      if (res.length !== 2 && i !== j && number + numbers[i] === result) {
        res.push(numbers[i]);
        res.push(number);
      }
    });
  });
  return res.length === 0 ? null : res;
}
console.log(sumPairs([3, 5, 7, 2], 10));
console.log(sumPairs([2, 2, 3, 1], 4));
console.log(sumPairs([2, 2, 3, 1], 4));
console.log(sumPairs([6, 7, 1, 2], 8));
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
console.log(sumPairs([-3, -2, 7, -5], 10));
