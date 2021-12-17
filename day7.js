function contains(store, product) {
  const stack = Object.values(store);
  return searchProduct(product, stack);
}
function searchProduct(product, stack) {
  const item = stack[0];

  if (typeof item === 'object') stack = stack.concat(Object.values(item));

  if (typeof item === 'string' && item === product) {
    return true;
  } else {
    stack.shift();
    return stack.length === 0 ? false : searchProduct(product, stack);
  }
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};
console.log(contains(almacen, 'coca-cola'));
