import React, { useState } from "react";
import TaskInput from "./taskInput.jsx"
import Task from "./tasks.jsx";


const Home = () => {
	const [list, setList] = useState([])


	const addItem = (li) => {
		const newList = [...list]
		newList.push(li)
		setList(newList)

	}
	// const removeItem = (index) => {
	// 	setList([
	// 		...list.slice(0, index),
	// 		...list.slice(index + 1)
	// 	]);
	// }
	// const removeItem = (e) =>{
	// 	let item = e.target.value;
	// 	setList(list).filter((e)=>(e !== name))
	// 	};
	



	return (
		<div className="container-fluid">
			<h1>To-Do</h1>
			<TaskInput addItem={addItem} />
			{
				list.map((li) => <Task listItem={li} removeItem={removeItem(e)} />)
			}
		</div>
	);
};

export default Home;


