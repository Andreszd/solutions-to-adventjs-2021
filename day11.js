const PRICE_ENTRANCE = 12;
const PRICE_FIDELITY_CARD = 250;

function shouldBuyFidelity(times) {
  return calcWhitCard(times) < PRICE_ENTRANCE * times;
}
function calcWhitCard(times) {
  let res = 0;
  if (times === 0) {
    res = PRICE_FIDELITY_CARD;
  } else {
    res = PRICE_ENTRANCE * Math.pow(0.75, times) + calcWhitCard(times - 1);
  }
  return res;
}
shouldBuyFidelity(1);
