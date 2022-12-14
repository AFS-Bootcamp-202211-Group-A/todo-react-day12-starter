import React from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useSelector } from 'react-redux';



export default function TodoList() {
  const todos = useSelector((state)=>state.todo);
  return (
    <div>
      <TodoGroup todos={todos}/>
      <TodoGenerator/>
    </div>
  );
}
