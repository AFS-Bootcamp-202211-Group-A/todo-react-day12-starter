import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todoList:[],
    },
    reducers:{
        addToDo: (state, action)=>{
            state.todoList.push(action.payload)
        },
        doneToDo: (state,action)=>{
            state.todoList.splice(action.payload,1)
        },
        toggleDone: (state,action)=>{
            for (const todoID in state.todoList){
                const todoItem = state.todoList[todoID]
                if (todoItem.id=== action.payload){
                    
                    todoItem.done = !todoItem.done;
                }

            }
        }
        
    }
})
export default todoSlice.reducer;
export const {addToDo, doneToDo, toggleDone} =  todoSlice.actions;