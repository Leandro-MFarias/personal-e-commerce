import { ProductGame } from '../ProductGame'

export function ListGames({ list }) {
  return (
    <section className='flex flex-wrap  justify-center gap-4'>
      {list.map((product, index) => (
        <ProductGame product={product} key={index} />
      ))}
    </section>
  )
}