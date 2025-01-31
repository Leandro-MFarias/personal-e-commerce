import { IoIosClose } from "react-icons/io";
import { CartItem } from "../CartItem";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../redux/cart/cart.selectors";

export function Cart({ setIsVisible }) {
  const { products } = useSelector((reducer) => reducer.cartReducer);

  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="absolute bg-white text-black w-[480px] top-0 right-0 flex flex-col justify-between px-2 py-6 h-screen snap-y overflow-y-auto">
      <div className="flex flex-col">
        <button className="self-end" onClick={() => setIsVisible(false)}>
          <IoIosClose className="text-5xl" />
        </button>
        <h2 className="text-3xl pl-2 font-semibold mb-6">Seu Carrinho</h2>

        <div className="relative space-y-4">
          {products.map((product) => (
            <div key={product.id} className="snap-start">
              <CartItem product={product} />
              <div className="w-full h-[1px] bg-zinc-400" />
            </div>
          ))}
        </div>
      </div>
      <p className="bottom-0 text-3xl font-bold pb-4 pl-4">Total: R$ {totalPrice}</p>
    </div>
  );
}
