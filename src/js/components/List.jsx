import React from "react";

export const List = ({ tasks, deleteTask }) => {
    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {tasks.map((task, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {task}
                            <i
                                className=" text-danger fa-solid fa-x"
                                onClick={() => deleteTask(index)}
                                style={{ cursor: 'pointer' }}
                            >
                            </i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};