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
                (arrItem) => arrItem.id === action.payload
            );
            state.todoItems[foundIndex].done =
                !state.todoItems[foundIndex].done;
        },

        deleteItem: (state, action) => {
            state.todoItems = state.todoItems.filter(item => item.id !== action.payload)
        },
    },
});
export const { addTodoItem, changeCompleteStatus, deleteItem} = todoSlice.actions;

export default todoSlice.reducer;
