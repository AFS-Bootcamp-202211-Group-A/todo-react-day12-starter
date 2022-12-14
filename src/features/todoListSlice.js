import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoItems: [
      {
        id: 1,
        text: "todo example",
        done: false,
      },
      {
        id: 2,
        text: "first todo item",
        done: false,
      },
    ],
    nextId: 3
  },
  reducers: {
    addTodoItem: (state, action) => {
      state.todoItems = [
        ...state.todoItems,
        {
          id: state.nextId,
          text: action.payload,
          done: false,
        },
      ];
      state.nextId+=1;
    },
    changeTodoStatus: (state, action) => {
      const targetItem = state.todoItems.find(
        (todoItem) => todoItem.id === action.payload
      );
      targetItem.done = !targetItem.done;
    },
    deleteTodoItem: (state, action) => {
      state.todoItems = state.todoItems.filter((todoItem) => todoItem.id !== action.payload);
    },
  },
});

export const { addTodoItem, changeTodoStatus, deleteTodoItem } =
  todoListSlice.actions;
export default todoListSlice.reducer;
