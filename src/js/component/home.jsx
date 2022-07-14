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
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
			method: "Get",
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
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
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
			alert(data.result)
			fetchListItem()
		})
		.catch((error) => {	//catching errors
			console.log(error);
		})

	}
	//removeItem
	const removeItem = (index) => {
		const newList = [...list]
		newList[index].done = true
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
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
			alert(data.result)
			fetchListItem()
		})
		.catch((error) => {	//catching errors
			console.log(error);
		})
	}

	return (
		<div className="container-fluid">
			<h1>To-Do</h1>
			<TaskInput addItem={addItem} />
			{list.map((li, i) => {
				return <Task key={`${li.label}-${i}`} listItem={li.label} index={i} removeItem={removeItem} />
			})}
			{list.length}
		</div>
	);
};

export default Home;