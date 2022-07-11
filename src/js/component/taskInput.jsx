import React, {useState} from "react";


const TaskInput = (props) => {
    const [inputValue, setInputValue ] = useState('');

    const validateInput = () => {
        if(inputValue === "") {
            alert("No tasks, add a task");
        } else {
            props.addItem(inputValue)
        }
    }

    return (
    <div className="container-fluid d-flex">
        
        <input 
        type="text" 
        onKeyPress={(e) => e.key === "Enter" && validateInput()}
        onChange={e => setInputValue(e.target.value)} 
        value={inputValue} 
        />
        <button className="btn btn-primary"onClick={validateInput}>Add task</button>
    </div>
    )
}

export default TaskInput;