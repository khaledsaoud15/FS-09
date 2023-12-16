import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
  },

  reducers: {
    register: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { register, login } = users.actions;
export default users.reducer;
