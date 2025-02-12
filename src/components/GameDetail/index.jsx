import game from "../../assets/wii-donkeyReturn.png";
import dk1 from "../../assets/dk1.png";
import dk2 from "../../assets/dk2.png";
import dk3 from "../../assets/dk3.png";

export function GameDetail() {
  return (
    <section className="max-w-screen-lg mx-auto flex bg-white text-black h-[70vh] px-10 space-x-24 pt-20 rounded-md">
      <div className="space-y-10 flex flex-col items-center">
        <img src={game} alt="" className="h-72" />
        <div className="flex space-x-2">
          <img src={dk1} alt="" className="w-28" />
          <img src={dk2} alt="" className="w-28" />
          <img src={dk3} alt="" className="w-28" />
        </div>
      </div>
      <div className="flex flex-col space-y-10 ">
        <div className="space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-base text-zinc-400 font-normal">Jogo: </span>
            <h2 className="text-3xl font-bold">Donkey Kong Return</h2>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-base text-zinc-400 font-normal">Marca: </span>
            <h2 className="text-lg font-bold">Nintendo Wii</h2>
          </div>
          <div className="flex space-x-2 w-[410px]">
            <span className="text-base text-zinc-400 font-normal">Sobre: </span>
            <p className="text-sm">
              Donkey Kong Country Returns é um jogo eletrônico de plataforma de
              rolagem lateral desenvolvido pela Retro Studios e publicado pela
              Nintendo para o Wii.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-base text-zinc-400 font-normal">Preço: </span>
            <h2 className="text-lg font-bold">R$ 143,91</h2>
          </div>
        </div>
        <div className="w-full space-y-3">
          <button className="w-full py-3 bg-orange-500 text-white text-xl font-semibold rounded-xl hover:bg-amber-500 transition duration-150 ease-in">
            Comprar
          </button>
          <div className="border border-zinc-300 p-2 space-y-2">
            <div className="flex justify-between items-center ">
              <p className="text-lg">Cartão de crédito</p>
              <p>Parcelas</p>
            </div>
            <div className="w-full h-[1px] bg-zinc-400" />
            <div className="flex space-x-10 justify-center">
              <div className="text-xs text-zinc-500">
                <p>1x de R$ 143,91 sem juros</p>
                <p>2x de R$ 71,95 sem juros</p>
                <p>3x de R$ 47,97 sem juros</p>
                <p>4x de R$ 35,97 sem juros</p>
                <p>5x de R$ 28,78 sem juros</p>
                <p>6x de R$ 23,98 sem juros</p>
              </div>
              <div className="text-xs text-zinc-500">
                <p>7x de R$ 20,55 sem juros</p>
                <p>8x de R$ 17,98 sem juros</p>
                <p>9x de R$ 15,99 sem juros</p>
                <p>10x de R$ 14,39 sem juros</p>
                <p>11x de R$ 15,71 sem juros</p>
                <p>12x de R$ 14,58 sem juros</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-zinc-400" />

            <div className="font-bold text-sm flex justify-between px-1">
              <p>PIX</p>
              <p>R$ 129,52</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
