import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";
import cartSlice from "./cartSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    wishlist: likeSlice,
    cart: cartSlice,
    users: usersSlice,
  },
});
