import React from "react";

export default function TodoItem(props) {
  return (
    <div className="itemBorder">
      <p className="todoItem">{props.todo.text}</p>
    </div>
  )
}
