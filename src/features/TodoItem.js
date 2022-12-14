import React from "react";
import { useDispatch } from "react-redux";
import { changeCompleteStatus, deleteItem } from "./TodoSlice.js";
import './TodoItem.css';

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
                className={done ? "done" : ""}
                onClick={onChangeCompleteStatus}
            >
                {text}
            </span>
            <button onClick={onDelete}>x</button>
        </div>
    );
}
