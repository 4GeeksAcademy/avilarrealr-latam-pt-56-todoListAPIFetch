import React from "react";

export const Counter = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="border rounded border-bottom text-muted text-start p-3" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}>
                        <span>item left {props.taskCount}</span>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}