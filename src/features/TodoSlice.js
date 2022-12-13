import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoItems: [],
        currentID: 0,
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoItems = [
                ...state.todoItems,
                {
                    id: state.currentID,
                    text: action.payload,
                    done: false,
                },
            ];
            state.currentID += 1;
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
