import { createSlice, current } from "@reduxjs/toolkit";

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
        id: state.length + 1,
        text: action.payload,
        done: false,
      };
      state = state.push(todoObject);
    },
    doneTodo: (state, action) => {
      const index = action.payload - 1;
      console.log("done ", index);
      state[index].done = true;
    },
  },
});

export const { addTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
