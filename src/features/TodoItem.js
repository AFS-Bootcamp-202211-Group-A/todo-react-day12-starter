import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";
import "./TodoItem.css";

export default function TodoItem(props) {
  const { id, text, done } = props.todo;
  const dispatch = useDispatch();
  const onDoneTodo = () => {
    dispatch(toggleTodo(id));
  };
  const onRemoveTodo = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div
      style={{
        border: "1px solid black",
        width: "30%",
        margin: "auto",
        padding: "10px",
        textAlign: "left",
      }}
    >
      <span className={done ? "done" : ""} onClick={onDoneTodo}>
        {text}
      </span>
      <button onClick={onRemoveTodo}>x</button>
    </div>
  );
}
