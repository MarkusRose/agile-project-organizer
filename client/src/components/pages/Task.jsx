import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";


function Task(props) {

    const params = useParams();
    const [task, setTask] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3002/api/getFromId/${params.taskId}`).then((data) => {
            setTask(data.data[0]);
            console.log(data.data[0]);
        });
    }, []);


    return (
        <div>
        <h1>{task.Title}</h1>
        <p>{task.Description}</p>
        <h4>{task.Status}</h4>
        </div>
    );
}


export default Task;
