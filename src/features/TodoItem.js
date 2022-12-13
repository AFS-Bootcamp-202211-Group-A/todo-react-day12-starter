import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";

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
      <span onClick={onDoneTodo}>
        {done ? (
          <span style={{ textDecoration: "line-through" }}>{text}</span>
        ) : (
          <span>{text}</span>
        )}
      </span>
      <button onClick={onRemoveTodo}>x</button>
    </div>
  );
}
