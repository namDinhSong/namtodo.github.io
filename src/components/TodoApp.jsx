import React from "react";
import Header from "./Header/Header";
import TaskList from "./List/taskList";
import Modal from "./Modal/Modal";
import SideBar from "./Sidebar/SideBar";
import "./style.scss";
export default function TodoApp() {
  return (
    <div className="app-header">
      <Header />
      {/* <Modal/> */}
      <div className="app-body">
        <SideBar />
        <TaskList />
      </div>
    </div>
  );
}
