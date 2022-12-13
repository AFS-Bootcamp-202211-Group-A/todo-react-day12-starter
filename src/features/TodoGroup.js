import React from "react";
import TodoItem from "./TodoItem";

export default function TodoGroup(props) {


  return props.todos.map((todo, index) => {
    return <TodoItem key={index} todo={todo.text} />;
  });
}
