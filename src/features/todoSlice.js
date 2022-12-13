import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: uuid(),
          text: action.payload,
          done: false,
        },
      ];
    },
    changeToggle: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id == action.payload);
      state.todos[index].done = !state.todos[index].done;
    },
    deleteItem: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload);
    }
  },
});

export const { addTodo, changeToggle, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
