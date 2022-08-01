import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function SideBar() {
  return (
    <div className="container">
      <Link to="/">
        <button>All Task</button>
      </Link>
      <Link to="/new">
        <button>New Task</button>
      </Link>
      <Link to="/doing">
        <button>Doing Task</button>
      </Link>
      <Link to="/done">
        <button>Done Task</button>
      </Link>
    </div>
  );
}
