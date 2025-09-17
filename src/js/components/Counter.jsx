import React from "react";

export const Counter = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="border rounded border-bottom text-muted text-start p-3">
                        <span>item left {props.taskCount}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}