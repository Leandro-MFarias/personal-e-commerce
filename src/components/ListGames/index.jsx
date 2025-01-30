import { products } from '../../data/products'
import { Game } from '../Game'

export function ListGames() {
  return (
    <section className='flex flex-wrap  justify-center gap-4'>
      {products.map((product, index) => (
        <Game product={product} key={index} />
      ))}
    </section>
  )
}