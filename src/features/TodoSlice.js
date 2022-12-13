import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoItems: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoItems = [
                ...state.todoItems,
                {
                    id: state.todoItems.length,
                    text: action.payload,
                    done: false,
                },
            ];
        },

        changeCompleteStatus: (state, action) => {
            var foundIndex = state.todoItems.findIndex(
                (x) => x.id === action.payload
            );
            state.todoItems[foundIndex].done =
                !state.todoItems[foundIndex].done;
        },
    },
});
export const { addTodoItem, changeCompleteStatus } = todoSlice.actions;

export default todoSlice.reducer;
