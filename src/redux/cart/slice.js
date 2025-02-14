import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartVisible = true
    },
    closeCart: (state) => {
      state.cartVisible = false
    },
    addProduct: (state, action) => {
      const productAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProduct: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const { addProduct, removeProduct, increaseProduct, decreaseProduct, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
