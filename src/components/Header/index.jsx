import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { products } from "../../data/products";

import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export function Header({ setIsVisible }) {
  const [search, setSearch] = useState("");

  const searchLowerCase = search.toLocaleLowerCase();

  const searchFilter = products.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchLowerCase)
  );

  const productCount = useSelector(selectProductsCount);

  function handleInputChange(e) {
    const { value } = e.target;

    if(!value) return
    


  }

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <header className="flex justify-between py-6 xl:px-3 px-4">
      <h2 className="text-3xl text-orange-500 font-semibold">ShopGames</h2>
      <nav className="flex items-center space-x-8">
        <div>
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-between bg-white px-2 w-72 py-1 rounded-xl border-[2px] border-orange-500"
          >
            <input
              type="search"
              value={search}
              placeholder="Buscar produtos"
              className="bg-transparent pl-2 outline-none text-zinc-700"
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="hover:scale-110 transition duration-150 ease-in"
            >
              <BiSearch className="text-zinc-800 text-xl" />
            </button>
          </form>
          <div className="absolute ml-1 bg-zinc-50 text-black w-[280px] px-2 rounded-b-lg">
            <ul>
              <li>Mario</li>
              <li>Zelda</li>
              <li>Donkey Kong</li>
            </ul>
          </div>
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
