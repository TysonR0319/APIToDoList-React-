import React, { useState } from "react";
import TaskInput from "./taskInput.jsx"



const Home = () => {
	const [list, setList] = useState([])
	const [visible, toggleVisibility] = useState(false)

	const addItem = (li) => {
		const newList = [...list, li]
		setList(newList)

	}
	const removeItem = (index) => {
		let newToDo = list.filter((item, i) => i != index)
		setList(newToDo)
	}





	return (
		<div className="container-fluid">
			<h1>To-Do</h1>
			<TaskInput addItem={addItem} />
			{
				list.map((li, i) => {
					return (
						<div className="container li" key={i}>
							<li onMouseEnter={() => toggleVisibility(true)}>{li}
								<button
									className={(visible == true) ? "btn DelItem float-end text-danger" : "d-none"}
									onClick={() => { toggleVisibility(false); removeItem(i); }}>
									<i className="fa fa-trash p-2 flex-shrink-1" />
								</button>
							</li>
						</div>
					)
				})
			}
			{list.length}
		</div>
	);
};

export default Home;


