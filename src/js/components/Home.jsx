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
				<Counter taskCount={tasks.length == 0 ? "No hay tareas, añadir tareas" : ` items left: ${tasks.length}`} />
				<div className="row">
					<div className="col d-flex justify-content-center">
						<div className="border border-bottom" style={{ width: "49vw", height: "0.8vh", boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)" }}></div>
					</div>
					<div className="col d-flex justify-content-center">
						<div className="border border-bottom" style={{ width: "47vw", height: "0.8vh", boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)" }}></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home