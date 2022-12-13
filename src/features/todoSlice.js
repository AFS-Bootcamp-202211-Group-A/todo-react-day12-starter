import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: ["hihi"],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(current(state));
      console.log("sizeValue:", action.payload);
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
