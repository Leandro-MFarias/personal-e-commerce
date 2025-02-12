import { Footer } from "../../components/Footer";
import { GameDetail } from "../../components/GameDetail";
import { Header } from "../../components/Header";
import { ProductGame } from "../../components/ProductGame";

export function ProductDetails() {
  return (
    <div className="space-y-10">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="bg-orange-600 w-full h-[1px] mb-10" />
        <GameDetail />
      </div>
      <Footer />
    </div>
  );
}
