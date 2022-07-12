import React, { useState } from "react";
import TaskInput from "./taskInput.jsx"
import Task from "./task.jsx";


const Home = () => {
	const [list, setList] = useState([])
	
	const addItem = (li) => {
		const newList = [...list, li]
		setList(newList)
	}

	const removeItem = (index) => {
		const newToDos = [...list].filter((item, i) => i != index)
		setList(newToDos)
	}

	return (
		<div className="container-fluid">
			<h1>To-Do</h1>
			<TaskInput addItem={addItem} />
			{list.map((li, i) => {
				return <Task key={`${li}-${i}`} listItem={li} index={i} removeItem={removeItem} />
			})}
			{list.length}
		</div>
	);
};

export default Home;


