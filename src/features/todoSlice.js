import { createSlice } from "@reduxjs/toolkit";

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
          id: state.todos.length + 1,
          text: action.payload,
          done: false,
        },
      ];
    },
    changeToggle: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id == action.payload);
      state.todos[index].done = !state.todos[index].done;
    },
  },
});

export const { addTodo, changeToggle } = todoSlice.actions;
export default todoSlice.reducer;
