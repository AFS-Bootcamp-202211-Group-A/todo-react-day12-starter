import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useSelector } from 'react-redux/es/exports';


export default function TodoList() {
  //const [todos, setTodos] = useState([]);

  const todos = useSelector(state => state.todoList.todos);

  const addTodo = (todo) => {
    //setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoGroup todos={todos} />
      <TodoGenerator addTodo={addTodo} />
    </div>
  );
}
