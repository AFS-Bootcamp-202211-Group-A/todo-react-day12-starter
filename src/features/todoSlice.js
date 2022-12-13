import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      text: "demo",
      done: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todoObject = {
        id: uuid(),
        text: action.payload,
        done: false,
      };
      state = state.push(todoObject);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state[index].done = !state[index].done;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      state.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
