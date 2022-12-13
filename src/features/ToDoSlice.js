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
        
    }
})
export default todoSlice.reducer;
export const {addToDo} =  todoSlice.actions;