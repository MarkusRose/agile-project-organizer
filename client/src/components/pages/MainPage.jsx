import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function MainPage() {
    const [taskList, setTaskList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3002/api/get").then((data) => {
            setTaskList(data.data);
        });
    });

    return (
        <div className="MainPage">
        <div className="TaskContainter">
        <h1> Task List </h1>
        { taskList.map((val, key) => {
            return (
                <div className="Task" >
                <h1 className="task-title" onClick={()=>(navigate(`/task/${val.TaskID}`))}>{val.Title}</h1>
                <p>{val.Description.length > 300 ? val.Description.substring(0, 300) + " ..." : val.Description}</p>
                <h4>{val.Status}</h4>
                </div>
            )})}
        </div>
        </div>
    );
}

export default MainPage;
