import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

import { FaShoppingCart } from "react-icons/fa";
import { SearchBar } from "../SearchBar";

export function Header({ setIsVisible }) {
  const productCount = useSelector(selectProductsCount);

  return (
    <header className="flex justify-between py-6 xl:px-3 px-4">
      <h2 className="text-3xl text-orange-500 font-semibold">ShopGames</h2>
      <nav className="flex items-center space-x-8">
        <SearchBar />
        
        <button
          className="flex items-center space-x-2 text-xl"
          onClick={() => setIsVisible(true)}
        >
          <span>Carrinho</span>
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-600 px-1 text-xs rounded-full">
              {productCount}
            </span>
          </div>
        </button>
      </nav>
    </header>
  );
}
