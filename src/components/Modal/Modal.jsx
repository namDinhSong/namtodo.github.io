import React from "react";
import Button from "../Button/Button";
import "./style.scss";
export default function Modal() {
  return (
    <div className="modal-container">
      <div className="modal-overlay"></div>
      <form>
        <h3>Create New Task</h3>
        <input placeholder="Title..."></input>
        <input placeholder="Creator..."></input>
        <input placeholder="Description..."></input>
        <div className="btn">
        <Button name={"Add"} />
        </div>
      </form>
    </div>
  );
}
