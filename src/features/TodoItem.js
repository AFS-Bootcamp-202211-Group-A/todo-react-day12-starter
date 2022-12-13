import React from "react";
import { useDispatch } from "react-redux";
import { changeCompleteStatus, deleteItem } from "./TodoSlice.js";

export default function TodoItem(props) {
    var { id, text, done } = props.todo;
    const dispatch = useDispatch();
    const onChangeCompleteStatus = () => {
        dispatch(changeCompleteStatus(id));
    };

    const onDelete = () => {
      dispatch(deleteItem(id));
  };

    return (
        <div>
            <span
                style={{ textDecoration: done && "line-through" }}
                onClick={onChangeCompleteStatus}
            >
                {text}
            </span>
            <button onClick={onDelete}>x</button>
        </div>
    );
}
