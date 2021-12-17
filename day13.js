export default function wrapGifts(gifts) {
  const wrappedGift = [];
  gifts.forEach((gift, idx) => {
    if (idx === 0) wrappedGift.push('*'.repeat(gift.length + 2));
    wrappedGift.push('*' + gift + '*');
    if (idx === gifts.length - 1) wrappedGift.push('*'.repeat(gift.length + 2));
  });
  return wrappedGift;
}
