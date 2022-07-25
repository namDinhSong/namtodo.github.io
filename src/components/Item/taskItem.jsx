import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styleItem.scss";

TaskItem.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  description: PropTypes.string,
};
function TaskItem(props) {
  const { title, creator, description } = props;
  const [status, setStatus] = useState("New");
  const [btn, setBtn] = useState("Start");
  const [color, setColor] = useState("green");
  
  const handleStatus = () => {
    if (status === "New"){
        setStatus("Doing")
        setBtn("Done")
        setColor("orange")
    } else if (status === "Doing"){
        setStatus("Done")
        setBtn("Renew")
        setColor("purple")
    } else{
        setStatus("New")
        setBtn("Start")
        setColor("green")
    }
  };
  return (
    <div className="card">
      <div className="card-top">
        <h5>Title: {title}</h5>
        <p>Creator: {creator}</p>
        <h5 style={{color:color}}>Status:{status}</h5>
      </div>
      <hr></hr>
      <div className="card-btm">
        <h5>Description:</h5>
        <p>{description}</p>
        <button onClick={handleStatus}>{btn}</button>
      </div>
    </div>
  );
}

export default TaskItem;
