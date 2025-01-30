import { ListGames } from "../ListGames";

export function Hero() {
  return (
    <section className="space-y-10">
      <h2>Coleção de Jogos</h2>
      <div>
        <ListGames />
      </div>
    </section>
  )
}