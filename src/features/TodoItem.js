import React from "react";

export default function TodoItem(props) {

  var {id, text, done} = props.todo;


    return (
    <div style={{textDecoration: props.todo.done && "line-through"}}>
        {text}
      <button>
        x
      </button>
    </div>
    );
}
