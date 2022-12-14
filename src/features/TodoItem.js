import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { changeToggle, deleteItem } from "./todoSlice";
import "./display.css"

export default function TodoItem(props) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    // if (props.todo.done) {
    //   event.target.style.removeProperty("text-decoration");
    // } else {
    //   event.target.style.setProperty("text-decoration", "line-through");
    // }
    dispatch(changeToggle(props.todo.id));
  };
  const handleDelete = () => {
    dispatch(deleteItem(props.todo.id));
    console.log("deleted ID: "+props.todo.id);
  }
  return (
    <div className="todoItem" >
      <span onClick={handleClick} className={props.todo.done?"todoDone": ""}>{props.todo.text}</span>
      <button className="Xbutton" onClick={handleDelete}>X</button>
    </div>
  );
}
