import { useRef } from "react";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { Cart } from "../../components/Cart";
import { useSelector } from "react-redux";
import { useHandleCloseCart } from "../../hooks/useHandleCloseCart";

export function Home() {
  const cartRef = useRef(null);
  const isVisible = useSelector((state) => state.cartReducer.cartVisible);
  const handleCloseCart = useHandleCloseCart(cartRef)

  return (
    <div onClick={handleCloseCart} className="space-y-10">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="bg-orange-600 w-full h-[1px] mb-10" />
        <Hero />
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