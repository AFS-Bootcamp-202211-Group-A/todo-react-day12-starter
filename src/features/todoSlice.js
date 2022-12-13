import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    todo: "hihi",
  },
  reducers: {
    // updateSize: (state, action) => {
    //   console.log(current(state));
    //   console.log("sizeValue:", action.payload);
    //   state.size = action.payload;
    // },
  },
});

// export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
