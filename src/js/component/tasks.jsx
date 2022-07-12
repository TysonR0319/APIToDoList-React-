import React, { useState } from "react";
import propTypes from "prop-types"
const Task = (props) => {
    const[visible, toggleVisibility] = useState(false)



    return (
        
        <li onMouseEnter={() => toggleVisibility(true)}>{props.listItem}
            <button
                className={(visible == true) ? "btn DelItem float-end text-danger" : "d-none"}
                onClick={() => {toggleVisibility(false); props.removeItem(i); }}>
                <i className="fa fa-trash p-2 flex-shrink-1" />
            </button>
        </li>
    
    )
}

export default Task;