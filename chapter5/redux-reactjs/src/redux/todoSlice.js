import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: {
    todoArr: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todoArr = [...state.todoArr, action.payload];
    },
    deletetodo: (state, action) => {
      const index = state.todoArr.find((i) => i.id === action.payload);
      state.todoArr.splice(state.todoArr.indexOf(index), 1);
    },
    updateTodo: (state, action) => {
      const updated = state.todoArr.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todoArr = updated;
    },
  },
});

export const { addTodo, deletetodo, updateTodo } = todo.actions;
export default todo.reducer;
