import { products } from '../../data/products'
import { ProductGame } from '../ProductGame'

export function ListGames() {
  return (
    <section className='flex flex-wrap  justify-center gap-4'>
      {products.map((product, index) => (
        <ProductGame product={product} key={index} />
      ))}
    </section>
  )
}