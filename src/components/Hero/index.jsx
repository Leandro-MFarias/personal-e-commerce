import { ListGames } from "../ListGames";
import { products } from "../../data/products"; 
import { useState } from "react";

export function Hero() {
  const [ selectList, setSelectList ] = useState(products)

  const listXbox = products.filter((item) => item.console === "xbox")
  const listPs3 = products.filter((item) => item.console === "ps3")
  const listWii = products.filter((item) => item.console === "wii")

  function handleSelectList(list) {
    setSelectList(list)
  }

  return (
    <section className="space-y-10 max-w-screen-xl mx-auto">
      <nav className="text-black bg-zinc-200 py-3 rounded-lg shadow-shape">
        <ul className="flex justify-around space-x-4 text-xl font-semibold px-10">
          <li onClick={() => handleSelectList(products)} className="cursor-pointer hover:text-orange-500" >Todos</li>
          <li onClick={() => handleSelectList(listPs3)} className="cursor-pointer hover:text-orange-500" >PS3</li>
          <li onClick={() => handleSelectList(listXbox)} className="cursor-pointer hover:text-orange-500" >XBOX 360</li>
          <li onClick={() => handleSelectList(listWii)} className="cursor-pointer hover:text-orange-500" >Nintendo Wii</li>
        </ul>
      </nav>
      <div>
          <ListGames list={selectList} />
      </div>
    </section>
  );
}
