export function locatePrice(price) {
  return price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
}