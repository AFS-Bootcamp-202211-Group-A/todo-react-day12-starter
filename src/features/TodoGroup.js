import React from "react";
import TodoItem from "./TodoItem";


export default function TodoGroup(props) {
  
  return props.todos.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });
}
