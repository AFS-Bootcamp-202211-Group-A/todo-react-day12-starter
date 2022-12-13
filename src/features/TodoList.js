import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
  // const [todos, setTodos] = useState([]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  return (
    <div>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}
