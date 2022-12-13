import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./todoSlice";

export default function TodoItem(props) {
  const { id, text, done } = props.todo;
  const dispatch = useDispatch();
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
      {text}
      <button onClick={onRemoveTodo}>x</button>
    </div>
  );
}
