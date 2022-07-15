import React, { useState } from "react";

const Task = (props) => {
    const[visible, toggleVisibility] = useState(false)

    return (
        <li 
            className={props.listItem.done ? "d-none" : ""}
            onMouseEnter={() => toggleVisibility(true)}
            onMouseLeave={() => toggleVisibility(false)}
        >
            {props.listItem.label}
            <button
                className={visible ? "btn DelItem float-end text-danger" : "d-none"}
                onClick={() => props.removeItem(props.index)}
            >
                <i className="fa fa-trash p-2 flex-shrink-1" />
            </button>
        </li>
    )
}

export default Task;