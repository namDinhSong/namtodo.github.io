import React from "react";
import TaskItem from "./taskItem";
import "./styleList.scss";
import Pagi from "../Pagination/Pagi";
export default function TaskList() {
  return (
    <div className="task-container">
      <div className="task-top">
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem
        title={"Task 1"}
        creator={"Nam"}
        description={
          "This is a task. This is a task. This is a task. This is a task. This is a task. This is a task. "
        }
      />
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      </div>
      <div className="task-btm">
        <Pagi/>
      </div>
    </div>
  );
}
