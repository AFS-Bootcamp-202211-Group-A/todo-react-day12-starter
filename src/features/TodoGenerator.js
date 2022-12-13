import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToDo } from "./ToDoSlice";

import uuid from 'react-uuid';

export default function TodoGenerator(props) {
  
  const [todo, setTodo] = useState("");
  
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };

  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addToDo(
      {
        "id:":uuid(), 
        "text":todo, 
        "done": false
      }
    ));
    setTodo("");
  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}

