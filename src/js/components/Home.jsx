import React, { useState } from "react"
import { Input } from "./Input"
import { List } from "./List"
import { Counter } from "./Counter"
import { UserForm } from "./UserForm"

const Home = () => {

	const [user, setUser] = useState(null)
	const [tasks, setTasks] = useState([])

	const addTask = async (newTaskLabel) => {
		const addedTask = await addToDo(user, newTaskLabel)
		if (addedTask) {
			setTasks([...tasks, addedTask])
		}
	}

	const deleteTask = async (taskId) => {
		const success = await deleteToDo(taskId)
		if (success) {
			const updatedTasks = tasks.filter((task) => task.id !== taskId)
			setTasks(updatedTasks)
		}
		return success
	}

	const deleteAllTasks = async () => {
		try {
			const deletePromises = tasks.map((task) => deleteToDo(task.id))
			await Promise.all(deletePromises)
			setTasks([])
		} catch (error) {
			console.log("Error al eliminar todas las tareas", error)
		}
	};

	const handleLogin = (username) => {
		getUserToDo(username)
	}

	async function getUserToDo(username) {
		const url = "https://playground.4geeks.com/todo/users/" + username
		try {
			const response = await fetch(url)
			if (response.status != 200) {
				alert("Error, usuario no encontrado, click en Create user para crear un nuevo usuario")
				return
			}
			// const body = await response.json()
			// const todoLabels = body.todos.map((toDo) => toDo.label)
			// setUser(username)
			// setTasks(todoLabels)
			const body = await response.json();
			setTasks(body.todos);
			setUser(username);
		} catch (error) {
			console.log("Error", error)
		}
	}

	async function addUser(username) {

		let url = "https://playground.4geeks.com/todo/users/" + username
		try {
			const response = await fetch(url, {
				method: "POST"
			})
			if (response.status != 201) {
				console.log("Error, algo salio mal")
				return
			}
			getUserToDo(username)
		} catch (error) {
			console.log("Error", error)
		}
	}

	async function deleteUser(username) {

		let url = "https://playground.4geeks.com/todo/users/" + username
		try {
			const response = await fetch(url, {
				method: "DELETE"
			})
			if (response.status != 204) {
				console.log("Error, algo salio mal")
				return
			}
			alert("User deleted successfully.")
		} catch (error) {
			console.log("Error", error)
		}
	}

	async function addToDo(username, taskLabel) {

		const data = {
			label: taskLabel,
			is_done: false
		}

		const url = "https://playground.4geeks.com/todo/todos/" + username
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			})
			if (response.status != 201) {
				console.log("Error, algo salio mal")
				return
			}
			const body = await response.json()
			return body
		} catch (error) {
			console.log("Error", error)
		}
	}

	async function deleteToDo(id) {

		let url = "https://playground.4geeks.com/todo/todos/" + id
		try {
			const response = await fetch(url, {
				method: "DELETE"
			})
			if (response.status != 204) {
				console.log("Error, algo salio mal")
				return false
			}
			return true
		} catch (error) {
			console.log("Error", error)
			return false
		}
	}

	return (
		<React.Fragment>
			<div className="d-flex justify-content-center align-items-center vh-100">
				<div className="container" style={{ fontFamily: "roboto-light" }}>
					{user ? (
						<div className="col">
							<h1 className="text-center">Bienvenido, {user}</h1>
							<Input addTask={addTask} />
							<List tasks={tasks} deleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
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
					) : (
						<div className="col">
							<UserForm onLogin={handleLogin} addUser={addUser} deleteUser={deleteUser} />
						</div>
					)}

				</div>
			</div>
		</React.Fragment>
	)
}

export default Home
