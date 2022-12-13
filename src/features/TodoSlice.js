import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoItems: [],
    },
    reducers: {
        addTodoItem: (state, action) => {

            state.todoItems = [...state.todoItems, {
                id: state.todoItems.length,
                text: action.payload,
                done: false,
            }];
        },
    },
});
export const { addTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
