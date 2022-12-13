import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoItems: [
            {
            id: 1,
            text: "todo example",
            done: false
            },
            {
             id: 2,
             text: "first todo item",
             done: false
            }
        ],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoItems = [
                ...todoItems, 
                {
                    id: state.todoItems.length+1,
                    text: action.payload,
                    done: false
                }
            ];
        }
    }

})

export const { addTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;