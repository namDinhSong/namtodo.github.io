import React, { useState } from "react";
import Button from "../Button/Button";
import "./style.scss";
export default function Modal() {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  function handleNewTask() {
    setTitle = "hi";
  }
  return (
    <div className="modal-container">
      <div className="modal-overlay"></div>
      <form>
        <ul>
          <li>
            <input placeholder="Title...">{title}</input>
          </li>
          <li>
            <input placeholder="Creator...">{creator}</input>
          </li>
          <li>
            <input placeholder="Description...">{description}</input>
          </li>
        </ul>
        <Button />
        {/* <button onClick={handleNewTask}/> */}
      </form>
    </div>
  );
}
