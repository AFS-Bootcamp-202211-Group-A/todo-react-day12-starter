import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useSelector } from "react-redux/es/exports";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <TodoGroup todos={todos} />
      <TodoGenerator />
    </div>
  );
}
