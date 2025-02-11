import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex items-center justify-around bg-zinc-500/90 shadow-shape h-full py-10">
      <h2 className="text-5xl text-orange-500 font-bold">ShopGames</h2>

      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2 border-2 border-orange-500 py-2 px-10 rounded-md">
          <p className="flex-1 text-lg">Nós Sigua no Instagram</p>
          <FaInstagram className="text-5xl text-" />
        </div>

        <div className="flex items-center border-2 border-orange-500 p-2 rounded-md px-10">
          <p className="flex-1 text-lg">Fale com a gente</p>
          <FaWhatsapp className="text-5xl text-" />
        </div>
      </div>
    </footer>
  );
}
