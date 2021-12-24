function canReconfigure(from, to) {
  const fromToArray = from.split('');
  const toArray = to.split('');
  let obj = {};
  return (
    fromToArray.length === toArray.length &&
    fromToArray.reduce((canReconfigure, letter, idx) => {
      if (canReconfigure) {
        if (
          (obj[letter] && obj[letter] !== toArray[idx]) ||
          (Object.values(obj).includes(toArray[idx]) && !obj[letter])
        )
          canReconfigure = false;
        obj = { ...obj, [letter]: toArray[idx] };
      }
      return canReconfigure;
    }, true)
  );
}
