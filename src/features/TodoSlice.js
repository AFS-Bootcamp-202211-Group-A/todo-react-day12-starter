import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoItems: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoItems = [...state.todoItems, action.payload];
        },
    },
});
export const { addTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
