import React from "react";
import TodoItem from "./TodoItem";

import { useSelector } from 'react-redux';
export default function TodoGroup() {
  const groupStyle ={
  }
  const todos = useSelector((state)=>state.todo.todoList);
  return todos.map((todo, index) => {
    return <TodoItem style={groupStyle} key={index} todo={todo} />;
  });
}
