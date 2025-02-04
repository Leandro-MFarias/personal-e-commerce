import { useState } from "react";
import { products } from "../../data/products";
import { BiSearch } from "react-icons/bi";
import { SearchList } from "../SearchList";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [filtered, setFilterd] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleInputChange(e) {
    e.preventDefault()

    const { value } = e.target;
    setSearch(value);

    if (!value) {
      setFilterd([]);
      setIsOpen(false);
      return;
    }

    const searchFilter = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterd(searchFilter);
    setIsOpen(true);
  }

  return (
    <div>
      <form className="flex items-center justify-between bg-white px-2 w-72 py-1 rounded-xl border-[2px] border-orange-500">
        <input
          type="search"
          value={search}
          placeholder="Buscar produtos"
          className="bg-transparent pl-2 outline-none text-zinc-700"
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          required
        />
        <button
          type="submit"
          className="hover:scale-110 transition duration-150 ease-in"
        >
          <BiSearch className="text-zinc-800 text-xl" />
        </button>
      </form>
      {isOpen && (
        <div onMouseDown={(e) => e.preventDefault()}>
          <SearchList filtered={filtered} />
        </div>
      )}
    </div>
  );
}
