function groupBy(collection, it) {
  let res = {};

  collection.forEach((item) => {
    let group = action(it, item);
    res = { ...res, [group]: res[group] ? [...res[group], item] : [item] };
  });
  return res;
}

function action(type, value) {
  if (typeof value === 'object' && type in value) return value[type];
  if (typeof type === 'function') return type(value);
  if (typeof type === 'string' && type === 'length')
    return value.toString().length;
}

groupBy(['one', 'two', 'three'], 'length'); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy([{ age: 23 }, { age: 24 }], 'age'); // { 23: [{age: 23}], 24: [{age: 24}] }
groupBy(
  [
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ],
  'rating'
);
