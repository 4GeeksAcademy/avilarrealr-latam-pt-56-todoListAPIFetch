import React, { useState } from "react";

export const Input = ({ addTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && inputValue.trim() !== "") {
            addTask(inputValue)
            setInputValue("")
        }
    };

    return (
        <div className="row">
            <div className="col">
                <div className="text-center" style={{ fontSize: "80px", fontFamily: "roboto-light", color: "green" }}>ToDo List</div>
                <input
                    type="text"
                    className="w-100 border rounded p-3"
                    placeholder="Task"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};