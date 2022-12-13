import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addTodo} from "./todoSlice";

export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  const onAdd = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
