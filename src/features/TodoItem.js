import React from "react";
import { useDispatch } from "react-redux";
import { doneTodo } from "./todoSlice";

export default function TodoItem(props) {
  const { id, text, done } = props.todo;
  const dispatch = useDispatch();
  const onDoneTodo = () => {
    dispatch(doneTodo(id));
  };
  return (
    <div
      onClick={onDoneTodo}
      style={{
        border: "1px solid black",
        width: "30%",
        margin: "auto",
        padding: "10px",
        textAlign: "left",
      }}
    >
      {text}
      <button>x</button>
    </div>
  );
}
