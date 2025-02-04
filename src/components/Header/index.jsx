import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/slice";

import { FaShoppingCart } from "react-icons/fa";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { products } from "../../data/products";

export function Header({ setIsVisible }) {
  const [ searchValue, setSearchValue ] = useState('')

  const { currentUser } = useSelector((reducer) => reducer.userReducer);

  const dispatch = useDispatch();

  const productCount = useSelector(selectProductsCount);

  function handleLoginClick() {
    dispatch(loginUser({ name: "Leandro", email: "Leandrorf1606@gmail.com" }));
  }

  function handleLogoutClick() {
    dispatch(logoutUser());
  }

  function handleSearch(e) {
    e.preventDefault()
    
  }

  return (
    <header className="flex justify-between py-6 xl:px-3 px-4">
      <h2 className="text-3xl text-orange-500 font-semibold">ShopGames</h2>
      <nav className="flex items-center space-x-8">
        <form onSubmit={handleSearch} className="flex items-center bg-white px-2 py-1 rounded-2xl border-[2px] border-orange-500">
          <input
            type="search"
            value={searchValue}
            placeholder="Buscar produtos"
            className="bg-transparent pl-2 outline-none text-zinc-700"
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button type="submit" className="hover:scale-110 transition duration-150 ease-in">
            <BiSearch className="text-zinc-800 text-xl" />
          </button>
        </form>

        <div className="px-2">
          {currentUser ? (
            <p onClick={handleLogoutClick} className="cursor-pointer text-lg">
              Sair
            </p>
          ) : (
            <p onClick={handleLoginClick} className="cursor-pointer text-lg">
              Login
            </p>
          )}
        </div>

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
