import React from "react";
import TaskItem from "../../components/Item/taskItem";
import "./styleList.scss";
import Pagi from "../../components/Pagination/Pagination";
import { data } from "../../components/constant/data";
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
              status={item.status}
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
