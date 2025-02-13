import { Cart } from "../Cart";

export function ShowCart({ cartRef, isVisible, setIsVisible }) {

  return (
    <div>
      {isVisible && (
        <div ref={cartRef}>
          <Cart setIsVisible={setIsVisible} />
        </div>
      )}
    </div>
  );
}
