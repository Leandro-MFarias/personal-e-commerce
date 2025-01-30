import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export function CartItem({ product }) {
  return (
    <div className="flex">
      <img src={product.imageUrl} className="w-36" alt="jlkjlkjlkjlkjljljlkj" />
      <div className="pt-2 space-y-2">
        <p className="font-bold">{product.name}</p>
        <p className="text-lg font-bold text-orange-500">R$ {product.price}</p>

        <div className="flex space-x-24">
          <div className="flex items-center space-x-2 pl-2">
            <button>
              <FaPlus />
            </button>

            <span>{product.quantity}</span>

            <button>
              <FaMinus />
            </button>
          </div>

          <button>
            <IoIosClose className="text-4xl text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
