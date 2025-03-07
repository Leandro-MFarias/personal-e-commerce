import { useDispatch, useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { Link } from "react-router";

import { FaShoppingCart } from "react-icons/fa";
import { SearchBar } from "../SearchBar";
import { openCart } from "../../redux/cart/slice";

export function Header() {
  const dispatch = useDispatch()
  const productCount = useSelector(selectProductsCount);
  
  function showCart() {
    dispatch(openCart())
  }
  
  return (
    <header className="flex justify-between py-6 xl:px-3 px-4">
      <Link to={"/"}>
        <h2 className="text-3xl text-orange-500 font-semibold">ShopGames</h2>
      </Link>
      <nav className="flex items-center space-x-8">
        <SearchBar />

        <button
          className="flex items-center space-x-2 text-xl"
          onClick={showCart}
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
