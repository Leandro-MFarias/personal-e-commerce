import { useDispatch } from "react-redux";
import { closeCart } from "../redux/cart/slice";

export function useHandleCloseCart(cartRef) {
  const dispatch = useDispatch();

  function handleCloseCart(e) {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      dispatch(closeCart());
    }
  }

  return handleCloseCart;
}
