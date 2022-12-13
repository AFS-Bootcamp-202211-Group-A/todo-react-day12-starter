import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(current(state));
      console.log("sizeValue:", action.payload);
      // state = [...state, action.payload];
      console.log(state.length);
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
