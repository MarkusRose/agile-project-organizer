import React from "react";

const tasks = require("./data/tasks.json");

console.log(tasks);

function Body() {
    return (
        <div className="content-window">
        <div>
            <h2>Scheduling</h2>
            <p>Slot 1</p>
            <div>Task A</div>
            <p>Slot 2</p>
            <div>Task B</div>
            <p>Slot 3</p>
            <div>Task C</div>
        </div>
        <div>
        <h2>Tasks</h2>
            <div>Task A</div>
            <div>Task B</div>
            <div>Task C</div>
        </div>
        </div>
    )
};

export default Body;
