export function Game({ product }) {
  return (
    <div className="bg-white flex flex-col justify-around w-[280px] h-[340px] py-4 rounded-xl">
      <img
        src={product.imageUrl}
        alt="Imagem da capa do jogo"
        className="w-32 self-center"
      />
      <div className="px-4">
        <p className="text-zinc-600 font-bold">{product.name}</p>
        <p className="text-orange-500 font-bold text-xl">R$ {product.price}</p>
      </div>
      <button className="border-2 border-orange-600 text-orange-500 rounded-md py-2 w-11/12 self-center font-bold hover:bg-orange-500 hover:text-white transition duration-300 ease">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
