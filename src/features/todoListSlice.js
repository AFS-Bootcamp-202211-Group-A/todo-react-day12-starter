import {createSlice, current} from '@reduxjs/toolkit';

const todoListSlice = createSlice({

    name: "todoList",
    initialState:{
        todos: [],
    },
    reducers:{
        addTodo:  (state, action) => {

            state.todos = [...state.todos, {
                id: state.todos.length,
                text: action.payload,
                done: false
            }

            ]
        },
        

    },
})

export const {addTodo} = todoListSlice.actions;
export default todoListSlice.reducer;