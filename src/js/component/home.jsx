import React, { useEffect, useState } from "react";
import TaskInput from "./taskInput.jsx"
import Task from "./task.jsx";


const Home = () => {
	const [list, setList] = useState([])
	//UseEffect
	useEffect(() => {
		fetchListItem()
	}, [])


	//ApiCallFunction
	const fetchListItem = () => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/tysonr0319', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {		//Getting Status on fetch
				if (resp.status == 200) {
					return resp.json();
				}
			})
			.then((data) => {	//Sending data to useState(list items)
				setList(data);
				console.log(data);
			})
			.catch((error) => {	//catching errors
				console.log(error);
			})

	}



	//AddItem function
	const addItem = (li) => {
		const newTodo = {label:li, done:false}
		const newList = [...list, newTodo]
		fetch('https://assets.breatheco.de/apis/fake/todos/user/tysonr0319', {
			method: "PUT",
			body: JSON.stringify(newList),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {		//Getting Status on fetch
			if (resp.status == 200) {
				return resp.json();
			}
		})
		.then((data) => {	
			fetchListItem()
		})
		.catch((error) => {	//catching errors
			console.log(error);
		})
	}
	//removeItem
	const removeItem = (index) => {
		// const newList = [...list]
		
		const deleteList = [...list];
		deleteList[index].done = true
		setList(deleteList);
		
		fetch('https://assets.breatheco.de/apis/fake/todos/user/tysonr0319', {
			method: "PUT",
			body: JSON.stringify(deleteList),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {		//Getting Status on fetch
			if (resp.status == 200) {
				return resp.json();
			}
		})
		.then((data) => {	
			fetchListItem()
		})
		.catch((error) => {	//catching errors
			console.log(error);
		})
	}
	const filteredList = list.filter((li, index) => {return li.done === false})

	
	

	return (
		<div className="container-fluid">
			<h1>To-Do</h1>
			<TaskInput addItem={addItem} />
			{list.map((li, i) => {
				return <Task key={`${li.label}-${i}`} listItem={li} index={i} removeItem={removeItem} />
			})}
			<p className="list-left">Tasks left {filteredList.length}</p>
		</div>
	);
};

export default Home;