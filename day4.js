function tree(height) {
  let tree = '';
  let amountAsterisks = 0;
  let posRefAsterisk = (getOddNumberByNumber(height) - 1) / 2 + 1;
  let posInit = posRefAsterisk;

  for (let num = 1; num <= height; num++) {
    amountAsterisks = getOddNumberByNumber(num);
    posRefAsterisk--;
    tree += makeRow(amountAsterisks, posRefAsterisk, '*');
  }

  tree += makeRow(1, posInit - 1, '#');
  tree += makeRow(1, posInit - 1, '#').trim();
  return tree;
}

function makeRow(amountChars, posRefAsterisk, char) {
  return (
    concatChars(posRefAsterisk, '_') +
    concatChars(amountChars, char) +
    concatChars(posRefAsterisk, '_') +
    '\n'
  );
}

function concatChars(amount, char) {
  return char.repeat(amount);
}

function getOddNumberByNumber(number) {
  let counter = 0;
  let oddNumber = 0;
  for (let num = 1; num <= 100 && counter !== number; num++) {
    if (num % 2 !== 0) {
      counter++;
      oddNumber = num;
    }
  }
  return oddNumber;
}

console.log(tree(2));
