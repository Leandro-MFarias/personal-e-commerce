export function selectProductsCount(reducer) {
  return reducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
}

export function selectCartTotalPrice(reducer) {
  return reducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
}
