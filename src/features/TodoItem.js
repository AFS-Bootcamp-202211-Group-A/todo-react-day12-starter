import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { changeToggle, deleteItem } from "./todoSlice";

export default function TodoItem(props) {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setToggle(!toggle);
    console.log(toggle);
    if (!toggle) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
    dispatch(changeToggle(props.todo.id));
  };
  const handleDelete = () => {
    dispatch(deleteItem(props.todo.id));
    console.log("deleted ID: "+props.todo.id);
  }
  return (
    <div className="todoItem" >
      <span onClick={handleClick}>{props.todo.text}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
