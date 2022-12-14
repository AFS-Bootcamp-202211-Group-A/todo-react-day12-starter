import React from "react";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodoItem } from "./todoListSlice";

export default function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const onTodoTaskClick = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const onDeleteToDoClick = () => {
    dispatch(deleteTodoItem(todo.id));
  }

  return (
    <div
      style={{ textDecoration: todo.done && "line-through"
      ,
      border: "1px solid black"}}
    >
      <span onClick={onTodoTaskClick}
      
     >{todo.text} </span>
      <button onClick={onDeleteToDoClick}>x</button>
    </div>
  );
}
