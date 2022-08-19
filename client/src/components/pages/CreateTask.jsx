import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function CreateTask(props) {


    const [task, setTask] = useState({
        Title: "",
        Description: "",
        Status: 0
    });

    let navigate = useNavigate();

    const submitTask = () => {
        console.log(task);
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            }
        };
        Axios.post("http://localhost:3002/api/create", task, axiosConfig)
            .then((response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
        navigate("/", { replace: true });
    }

    return (
        <div className="CreatePost">
        <h1>Create a new task</h1>
        <label>Title: </label>
        <input type="text" onChange={(e) => {
            setTask({...task, Title: e.target.value});
        }} />
        <label>Description: </label>
        <textarea onChange={(e) => {
            setTask({...task, Description: e.target.value});
        }}></textarea>
        <button onClick={submitTask}>Submit Task</button>
        </div>
    );
}


export default CreateTask;
