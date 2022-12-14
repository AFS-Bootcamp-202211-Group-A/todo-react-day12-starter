import React from "react";
import { useDispatch } from "react-redux";
import {doneTodo, deleteTodo} from "./todoListSlice";

export default function TodoItem(props) {
  const dispatch = useDispatch();

  const doneTodoInItem = () => {
    dispatch(doneTodo(props.todo.id));
  };

  const deleteTodoItem = () => {
    dispatch(deleteTodo(props.todo.id));
  };


  return <div>
    <span className={ props.todo.done ? "Done-todoItem":""} onClick={doneTodoInItem}>{props.todo.text} </span>
    <button onClick={deleteTodoItem}> X </button>
    </div>;
}
