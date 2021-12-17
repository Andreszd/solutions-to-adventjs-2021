function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const res = [0, 0, 0, 0, 0, 0];
  const idxRef = coins.findIndex((coin) => coin >= change);
  return getMinCoins(
    idxRef === -1 ? coins.length - 1 : idxRef,
    change,
    coins,
    res
  );
}

function getMinCoins(idx, acc, coins, res) {
  if (idx < 0) {
    return res;
  } else {
    while (acc - coins[idx] >= 0) {
      acc -= coins[idx];
      res[idx] = res[idx] > 0 ? (res[idx] += 1) : 1;
    }
    return getMinCoins(idx - 1, acc, coins, res);
  }
}
getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
