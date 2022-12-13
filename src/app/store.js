import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlice";


const store = configureStore({
    reducer:{
        counter: todoReducer,
    }
});

export default store;