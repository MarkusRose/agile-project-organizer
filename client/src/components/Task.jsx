import React from "react";


function Task(props) {
    return (
        <div className="task">
        <h3>Task { props.name }</h3>
        <p>Status: {props.status}</p>
        </div>
    )
};


function TaskList(props) {
    return (
        <div>
        <div>
        <h2>Tasks</h2>
        </div>
        {
            props.tasks.map((t) => { return <Task 
                key={t.key} 
                name={t.title}
                description={t.description}
                status={t.status}
                /> })
        }
        </div>
    )
};



function TaskSchedule(props) {
    return(
        <div>
            <h2>Scheduling</h2>
            <p>Slot 1</p>
            <Task name="One" />
            <p>Slot 2</p>
            <Task name="Two" />
            <p>Slot 3</p>
            <Task name="Three" />
        </div>
    )
};

export default Task;
export { TaskList, TaskSchedule };
