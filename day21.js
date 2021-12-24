function canCarry(capacity, trip) {
  const untravelRoutes = [];
  let isCapacityExceeded = false;
  let currentCapacity = 0;
  trip.forEach((route) => {
    const [amountGifts, currentPoint, deliveryPoint] = route;
    if (isCapacityExceeded) return;

    if (untravelRoutes.length > 0 && untravelRoutes[0].point <= currentPoint) {
      currentCapacity -= untravelRoutes[0].amount;
      untravelRoutes.shift();
    }

    if (currentCapacity + amountGifts > capacity) isCapacityExceeded = true;

    currentCapacity += amountGifts;

    untravelRoutes.push({ point: deliveryPoint, amount: amountGifts });
  });

  return !isCapacityExceeded;
}
canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]); // true -> nunca supera el máximo de capacidad
canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]); // false -
canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]);
canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]); // false
/*
 *
  const giftsNotDelivered = []
  const lastRoute = trip[trip.length - 1];
  const [_, _, lastPoint] = lastRoute;

  for (let i = 0; i <= lastPoint; i++) {}
  const currentCapacity = 0;
  const destinyPoint = 0;
 * */
