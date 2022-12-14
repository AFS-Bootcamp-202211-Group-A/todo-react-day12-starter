import React from "react";
import { useDispatch } from 'react-redux';
import { doneToDo,toggleDone } from "./ToDoSlice";

export default function TodoItem(props) {

  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleDone(todo.id));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(doneToDo(todo.id));
  };

  const StrikeThroughText = ()=>{
    if (props.todo.done === true){
      return <div style={{textAlign: "left"}}><s>{props.todo.text}</s></div>
    }else{
      return <div style={{textAlign: "left"}}>{props.todo.text}</div>
    }
  }

  const todoItemStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "auto",
    marginBottom:"5px",
    width:"40%",
  };

  const buttonStyle = {
    display: "inline-block",
    width: "90%",
  }

  const deleteStyle = {
    display: "inline-block",
    width:"10%"
  }

  return <div style={todoItemStyle}>
            <span style={buttonStyle} onClick={onToggle}> 
            <StrikeThroughText/>
            </span> 
            <span style={deleteStyle} onClick={onDelete}>x</span>
         </div> ;
}
