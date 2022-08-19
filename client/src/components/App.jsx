import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./Footer";
import MainPage from "./pages/MainPage";
import CreateTask from "./pages/CreateTask";
import Task from "./pages/Task";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div>
        <div className="navbar">
        <div className="links">
        <a href="/">Main Page</a>
        <a href="/createtask">Create Task</a>
        </div>
        </div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/task/:taskId" element={<Task />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App

