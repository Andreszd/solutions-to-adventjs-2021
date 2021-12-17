function listGifts(letter = '') {
  const gifts = clearList(letter.split(' '));
  return amountGiftsRepeats(gifts);
}
function amountGiftsRepeats(gifts) {
  let oficialList = {};
  gifts.forEach((gift) => {
    oficialList = {
      ...oficialList,
      [gift]: !oficialList[gift] ? 1 : (oficialList[gift] += 1),
    };
  });
  return oficialList;
}

function clearList(list = []) {
  const gifts = [];
  list.forEach((gift) => {
    if (gift.trim() !== '' && gift.trim().split('')[0] !== '_') {
      gifts.push(gift.trim());
    }
  });
  return gifts;
}

const carta = 'bici    coche balón _playstation bici coche peluche';

console.log(listGifts(carta));
