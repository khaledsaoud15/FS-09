import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        item.totalPrice = item.quantity * item.price;
      }
    },
  },
});

export const { addToCart, updateCart } = cart.actions;
export default cart.reducer;
