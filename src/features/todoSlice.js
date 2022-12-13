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
      console.log(current(state));
      console.log("todoValue:", action.payload);
      const todoObject = {
        id: state.length + 1,
        text: action.payload,
        done: false,
      };
      state = state.push(todoObject);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
