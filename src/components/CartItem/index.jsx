import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../redux/cart/slice";
import { locatePrice } from "../../utils/locatePrice";
import { Link } from "react-router";

export function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleRemoveProduct() {
    dispatch(removeProduct(product.id));
  }

  function handleIncreaseProduct() {
    dispatch(increaseProduct(product.id));
  }

  function handleDecreaseProduct() {
    dispatch(decreaseProduct(product.id));
  }

  const { imageUrl, name, price, quantity } = product;

  return (
    <div className="flex flex-grow-1">
      <Link to={`/games/${product.id}`}>
        <img src={imageUrl} className="w-36" alt={name} />
      </Link>
      <div className="pt-2 space-y-2">
        <p className="font-bold">{name}</p>
        <p className="text-lg font-bold text-orange-500">
          {locatePrice(price)}
        </p>

        <div className="flex space-x-24">
          <div className="flex items-center space-x-2 pl-2">
            <button onClick={handleDecreaseProduct}>
              <FaMinus className="hover:scale-125 transition duration-150 ease-linear" />
            </button>

            <span>{quantity}</span>

            <button onClick={handleIncreaseProduct}>
              <FaPlus className="hover:scale-125 transition duration-150 ease-linear" />
            </button>
          </div>

          <button onClick={handleRemoveProduct}>
            <IoIosClose className="text-4xl text-zinc-500 hover:scale-110 transition duration-150 ease" />
          </button>
        </div>
      </div>
    </div>
  );
}
