import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { changeToggle } from "./todoSlice";

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
  return (
    <div className="itemBorder" onClick={handleClick}>
      <p className="todoItem">
        {props.todo.text}
        <button className="Xbutton">X</button>
      </p>
    </div>
  );
}
