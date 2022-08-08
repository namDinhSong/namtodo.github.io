import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./style.scss";

function TaskForm(props) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: ""
  });
  const handleFormValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    // console.log(e);
  };
  const handleChangeForm = (e) => {
    // no reload
    e.preventDefault();
    // validate
    if (
      formValue.title !== "" &&
      formValue.author !== "" &&
      formValue.description !== ""
    ) {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      const has_item =
        data.find((item) => item.title === formValue.title) != null;
      if (has_item) {
        alert("Duplicated");
      } else {
        data.push(formValue);
        // local storage
        localStorage.setItem("data", JSON.stringify(data));
      }
    } else {
      alert("Nhap lai");
    };
    // naviga to home
    navigate("../home");
  };
  return (
    <div className="form-contain">
      <form onSubmit={handleChangeForm}>
        <h2>Create New Task</h2>
        <input
          placeholder="Title..."
          name="title"
          value={formValue.title}
          onChange={handleFormValue}
        />
        <input
          placeholder="Creator..."
          name="author"
          value={formValue.author}
          onChange={handleFormValue}
        />
        <input
          placeholder="Description..."
          name="description"
          value={formValue.description}
          onChange={handleFormValue}
        />
        <button type="submit" onClick={handleChangeForm}>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
