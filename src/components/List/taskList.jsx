import React from "react";
import TaskItem from "./taskItem";
import "./styleList.scss";
import Pagi from "../Pagination/Pagi";
import { data } from "../constant/data";
export default function TaskList() {
  return (
    <div className="task-container">
      <div className="task-top">
        {data.map((item,index) => {
          return (
            <TaskItem
              title={item.title}
              key={index}
              creator={item.creator}
              description={item.description}
            />
          );
        })}
      </div>
      <div className="task-btm">
        <Pagi />
      </div>
    </div>
  );
}
