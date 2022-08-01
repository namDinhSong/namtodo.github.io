import React, { useState } from "react";
import "./style.scss";

function TaskForm(props) {
  const [formValue, setFormValue] = useState({
    title:'',
    author:'',
    description:''
  })
  const handleFormValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]:e.target.value,
    })
    console.log(e);
  }
  return (
    <div className="form-contain">
      <form onSubmit={handleFormValue}>
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
        <button/>
      </form>
    </div>
  );
}

export default TaskForm;
