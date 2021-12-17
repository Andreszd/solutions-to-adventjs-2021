function decodeNumbers(symbols) {
  const keys = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };
  try {
    let acc = 0;
    symbols.split('').forEach((symbol, idx) => {
      if (!(symbol in keys)) throw BreakException;
      let decoded =
        keys[symbol] < keys[symbols[idx + 1]] ? -keys[symbol] : keys[symbol];
      acc += decoded;
    });
    return acc;
  } catch (err) {
    return NaN;
  }
}

decodeNumbers('...'); // 3
decodeNumbers('.,'); // 4 (5 - 1)
decodeNumbers(',.'); // 6 (5 + 1)
decodeNumbers(',...'); // 8 (5 + 3)
decodeNumbers('.........!'); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;'); // 49 (50 - 1)
decodeNumbers('..,'); // 5 (-1 + 1 + 5)
decodeNumbers('..,!'); // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!'); // 49 (-1 -50 + 100)
decodeNumbers('!!!'); // 300
decodeNumbers(';!'); // 50
decodeNumbers(';.W'); // NaN
