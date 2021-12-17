function daysToXmas(date) {
  let dateXmas = new Date('Dec 25, 2021');
  date.setHours(0, 0, 0);
  let diffTimes = dateXmas.getTime() - date.getTime();
  return parseDays(diffTimes);
}

function parseDays(mille) {
  let calc = mille / (1000 * 60 * 60 * 24);
  return parseInt(calc.toFixed());
}

console.log(daysToXmas(new Date('Dec 26, 2021 00:01:59')));
