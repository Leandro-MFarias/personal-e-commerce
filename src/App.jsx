import { useRef, useState } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";

export function App() {
  const [isVisible, setIsVisible] = useState(false);
  const cartRef = useRef(null);

  function handleCloseCart(e) {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  return (
    <div onClick={handleCloseCart} className="space-y-10">
      <div className="max-w-screen-2xl mx-auto">
        <Header setIsVisible={setIsVisible} />
        <div className="bg-orange-600 w-full h-[1px] mb-10" />

        <Hero />
      </div>
      <Footer />

      {isVisible && (
        <div ref={cartRef}>
          <Cart setIsVisible={setIsVisible} />
        </div>
      )}
    </div>
  );
}
