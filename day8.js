function maxProfit(prices = []) {
  const maxPrice = Math.max(
    ...prices.map((price, idx) =>
      idx + 1 >= prices.length
        ? -1
        : maxBenefice(price, prices.slice(idx + 1, prices.length))
    )
  );
  return maxPrice <= 0 ? -1 : maxPrice;
}

function maxBenefice(basePucharse, offers) {
  return Math.max(...offers.map((offer) => offer - basePucharse));
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda));
