import React, { useState } from "react"
import { Input } from "./Input"
import { List } from "./List"
import { Counter } from "./Counter"

const Home = () => {

	const [tasks, setTasks] = useState([])

	const addTask = (newTask) => {
		setTasks([...tasks, newTask])
	}

	const deleteTask = (indexToDelete) => {
		const updatedTasks = tasks.filter((_, index) => index !== indexToDelete)
		setTasks(updatedTasks)
	}


	return (
		<React.Fragment>
			<div className="container" style={{ fontFamily: "roboto-light" }}>
				<Input addTask={addTask} />
				<List tasks={tasks} deleteTask={deleteTask} />
				<Counter taskCount={tasks.length} />
				<div className="row">
					<div className="col d-flex justify-content-center">
						<div className="border border-bottom" style={{ width: "49vw", height: "0.8vh" }}></div>
					</div>
					<div className="col d-flex justify-content-center">
						<div className="border border-bottom" style={{ width: "47vw", height: "0.8vh" }}></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home