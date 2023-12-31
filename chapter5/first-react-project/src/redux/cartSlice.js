import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(
        (i) => i.id === action.payload.id && i.color === action.payload.color
      );

      if (item) {
        item.quantity += action.payload.quantity;
        item.totalPrice = item.quantity * action.payload.price;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      const filteredCart = state.cart.filter((c) => c._id !== action.payload);

      state.cart = filteredCart;
    },
  },
});

export const { addToCart, deleteFromCart } = cart.actions;
export default cart.reducer;
