import React from "react";

export const List = ({ tasks, deleteTask, deleteAllTasks }) => {

    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {tasks.map((task) => (
                        <li key={task.id}
                            className="list-group-item d-flex justify-content-between align-items-center ps-5"
                            style={{ fontSize: "20px" }}
                        >
                            {task.label}
                            <i
                                className=" text-danger fa-solid fa-x"
                                onClick={() => deleteTask(task.id)}
                                style={{ cursor: 'pointer' }}
                            >
                            </i>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={deleteAllTasks}
                    className="btn btn-outline-danger w-100">
                    Delete All
                </button>
            </div>
        </div>
    );
};