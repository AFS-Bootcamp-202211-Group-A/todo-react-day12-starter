import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./TodoSlice.js";
export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  const dispatch = useDispatch();

  const onAdd = () => {
    setTodo("");
    dispatch(addTodoItem(todo));

  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
