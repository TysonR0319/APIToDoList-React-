import React, { useState } from "react";

const Task = (prop1, prop2) => {
    const[visible, toggleVisibility] = useState(false)



    return (
        
        <li  onMouseEnter={() => toggleVisibility(true)}>{prop1.listItem}
            <button
                className={(visible == true) ? "btn DelItem float-end text-danger" : "d-none"}
                onClick={() => {toggleVisibility(false); prop2.removeItem(); }}>
                <i className="fa fa-trash p-2 flex-shrink-1" />
            </button>
        </li>
    
    )
}

export default Task;