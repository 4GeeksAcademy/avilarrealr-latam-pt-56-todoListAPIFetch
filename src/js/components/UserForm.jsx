import React, { useState } from "react";

export const UserForm = ({ onLogin, addUser, deleteUser }) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim() !== "") {
            onLogin(inputValue.trim())
        }
    }

    const handleDeleteUserClick = () => {
        if (inputValue.trim() !== "") {
            deleteUser(inputValue.trim())
            setInputValue("")
        }
    };

    return (
        <div className="card p-4">
            <h2 className="card-title text-center">Ingresa tu nombre de usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Nombre de usuario"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark w-100 mt-3">
                    Login
                </button>
            </form>
            <button
                onClick={(event) => { event.target.innerText == "Create User" ? addUser(inputValue) : null }}
                className="btn btn-outline-success w-100 mt-3">
                Create User
            </button>
            <button
                onClick={handleDeleteUserClick}
                className="btn btn-outline-danger w-100 mt-3">
                Delete User
            </button>
        </div>
    )
}