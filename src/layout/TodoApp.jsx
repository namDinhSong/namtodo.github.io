import React from "react";
import Header from "./Header/Header";
import TaskList from "./Body/taskList";
import SideBar from "../components/Sidebar/SideBar";
import "./style.scss";
import { Route, Routes } from "react-router";
import TaskForm from "../TaskForm";
import NewTask from "../pages/NewTask";
import DoingTask from "../pages/DoingTask";
import DoneTask from "../pages/DoneTask";
export default function TodoApp() {
  return (
    <div className="app-header">
      <Header />
      <div className="app-body">
        <SideBar />
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/add" element={<TaskForm/>}/>
        <Route path="/new" element={<NewTask/>}/>
        <Route path="/doing" element={<DoingTask/>}/>
        <Route path="/done" element={<DoneTask/>}/>
      </Routes>
      </div>
    </div>
  );
}
