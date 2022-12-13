import React, { useState } from "react";

export default function TodoItem(props) {
  const [toggle, setToggle] = useState(true);
  const handleClick = (event) => {
    setToggle(!toggle);
    console.log(toggle);
    if(!toggle){
      event.target.style.removeProperty('text-decoration');
    }
    else{
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };
  return (
    <div className="itemBorder" onClick={handleClick}>
    
        <p className="todoItem">{props.todo.text}</p> 
          
    </div>
  )
}
