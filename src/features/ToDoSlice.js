import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[
            {
              id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
              text: "todo example",
              done: false,
            },
            {
              id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
              text: "first todo item",
              done: true,
            },
          ],
    
    reducers:{
        addToDo: (state, action)=>{
            state.push({ id: Date.now(), ...action.payload });
        },
        toggleDone: (state, action) => {
            return state.map((todo) =>
              todo.id == action.payload ? { ...todo, done: !todo.done } : todo
            );
          },
        doneToDo: (state, action) => {
            return state.filter((todo) => todo.id != action.payload);
        },
        
    }
})
export default todoSlice.reducer;
export const {addToDo, doneToDo, toggleDone} =  todoSlice.actions;