import {createSlice, current} from '@reduxjs/toolkit';

const todoListSlice = createSlice({

    name: "todoList",
    initialState:{
        todos: [{
            id: 0,
            text: "todo example",
            done: false
        }],
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
        doneTodo: (state, action) => {
            var foundTodo = state.todos.find(todo => todo.id === action.payload);
            foundTodo.done = !foundTodo.done;
            
        },


        

    },
})

export const {addTodo, doneTodo} = todoListSlice.actions;
export default todoListSlice.reducer;