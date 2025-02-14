import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHandleCloseCart } from "../../hooks/useHandleCloseCart";

import { Header } from "../../components/Header";
import { GameDetail } from "../../components/GameDetail";
import { Cart } from "../../components/Cart";
import { Footer } from "../../components/Footer";

export function ProductDetails() {
  const cartRef = useRef(null);
  const isVisible = useSelector((state) => state.cartReducer.cartVisible);
  const handleCloseCart = useHandleCloseCart(cartRef)

  return (
    <div onClick={handleCloseCart} className="space-y-10">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="bg-orange-600 w-full h-[1px] mb-10" />
        <GameDetail />
      </div>

      {isVisible && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
      <Footer />
    </div>
  );
}
