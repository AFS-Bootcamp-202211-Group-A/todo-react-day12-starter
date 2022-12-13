import React from "react";
import { useDispatch } from "react-redux";
import { changeCompleteStatus } from "./TodoSlice.js";

export default function TodoItem(props) {
    var { id, text, done } = props.todo;
    const dispatch = useDispatch();
    const onChangeCompleteStatus = () => {
        dispatch(changeCompleteStatus(id));
    };

    return (
        <div
            style={{ textDecoration: done && "line-through" }}
            onClick={onChangeCompleteStatus}
        >
            {text}
            <button>x</button>
        </div>
    );
}
