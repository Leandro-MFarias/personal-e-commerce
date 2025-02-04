import { useState } from "react"

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cart } from "./components/Cart";

export function App() {
  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <div className="relative">
      <div className="max-w-screen-2xl mx-auto">
        <Header setIsVisible={setIsVisible} />
        <div className="bg-orange-600 w-full h-[1px] mb-10" />

        <Hero />
      </div>
      {isVisible && (
        <Cart setIsVisible={setIsVisible} />
      )}
    </div>
  );
}
