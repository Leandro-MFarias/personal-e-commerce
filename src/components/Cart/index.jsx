import { IoIosClose } from "react-icons/io";
import { CartItem } from "../CartItem";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../redux/cart/cart.selectors";
import { locatePrice } from "../../utils/locatePrice";

export function Cart({ setIsVisible }) {
  const { products } = useSelector((reducer) => reducer.cartReducer);

  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="fixed bg-white text-black w-[380px] top-0 right-0 flex flex-col justify-between px-2 py-6 h-screen">
      <div className={`space-y-4 flex-grow-1 overflow-y-auto overflow-x-hidden ${products.length <= 0 && `overflow-y-hidden`}`}>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl pl-2 font-bold">Seu Carrinho</h2>
          <button onClick={() => setIsVisible(false)}>
            <IoIosClose className="text-5xl hover:scale-110 transition duration-200 ease" />
          </button>
        </div>
        {products.map((product) => (
          <div key={product.id}>
            <CartItem product={product} />
            <div className="w-full h-[1px] bg-zinc-400" />
          </div>
        ))}
      </div>

      <p className="text-3xl font-bold py-4 pl-4">Total: {locatePrice(totalPrice)}</p>
    </div>
  );
}
