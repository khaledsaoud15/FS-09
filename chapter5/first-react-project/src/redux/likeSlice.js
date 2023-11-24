import { createSlice } from "@reduxjs/toolkit";

const like = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },

  reducers: {
    addToWishList: (state, action) => {
      const item = state.wishlist.find((i) => i.id === action.payload.id);
      if (item) {
        const wishV2 = state.wishlist.filter((i) => i.id !== action.payload.id);
        state.wishlist = wishV2;
      } else {
        state.wishlist.push(action.payload);
      }
    },
  },
});

export const { addToWishList } = like.actions;
export default like.reducer;
