import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoGroup() {
  const todos = useSelector((state) => state.todo.todoItems);

  return todos.map((todo, index) => {
    return <TodoItem key={index} todo={todo} />;
  });
}
