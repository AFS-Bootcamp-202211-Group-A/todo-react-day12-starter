import React from "react";
import { useDispatch } from "react-redux";
import {doneTodo} from "./todoListSlice";

export default function TodoItem(props) {
  const dispatch = useDispatch();

  const doneTodoInItem = () => {
    dispatch(doneTodo(props.todo.id));
  };

  return <div className={ props.todo.done ? "Done-todoItem":""} onClick={doneTodoInItem}>{props.todo.text}</div>;
}
