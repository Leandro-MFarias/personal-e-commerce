export function selectProductsCount(reducer) {
  return reducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
}
