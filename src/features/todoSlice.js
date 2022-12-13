import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: "",
    todos: [""],
  },
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { setTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
