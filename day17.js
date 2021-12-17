function countPackages(carriers, carrierID) {
  let searchCarriers = [];
  let currentId = carrierID;
  let acc = 0;
  carriers.forEach((current) => {
    const [id, amountPackages, subordinates] = current;
    if (currentId === id) {
      if (subordinates.length > 0)
        searchCarriers = searchCarriers.concat(subordinates);
      currentId = searchCarriers[0];
      searchCarriers.shift();
      acc += amountPackages;
    }
  });
  return acc;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

countPackages(carriers, 'dapelu'); // 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
];

countPackages(carriers2, 'camila'); // 15
