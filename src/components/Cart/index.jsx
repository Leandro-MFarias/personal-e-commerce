import { IoIosClose } from "react-icons/io";
import { CartItem } from "../CartItem";
import { useSelector } from "react-redux";

export function Cart({ setIsVisible }) {
  const { products } = useSelector(reducer => reducer.cartReducer)

  return (
    <div className="absolute h-screen bg-white text-black w-[480px] top-0 right-0 flex flex-col px-2 py-6">
      <button className="self-end" onClick={() => setIsVisible(false)}>
        <IoIosClose className="text-5xl" />
      </button>
      <h2 className="text-3xl pl-2 font-semibold mb-6">Seu Carrinho</h2>

      <div className="pl-2 space-y-4">
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        
        {/* <p className="text-3xl font-bold">Total: 1,000.00</p> */}
      </div>
    </div>
  );
}
