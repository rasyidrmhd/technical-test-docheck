import React from "react";
import { Icon } from "./Icon";
import { Task } from "../store/features/taskSlice";

export const TaskCard: React.FC<Task> = ({ id, name, dueDate, checked }) => {
  return (
    <div className="card">
      <div className="task-side-box">
        <div className={`checked-box ${checked ? "checked" : ""}`}>{checked && <Icon icon="check" color="white" size="16px" weight="800" />}</div>
      </div>
      <div className="task-body">
        <text>{name}</text>
        <br />
        <text style={{ color: "#2fcc71", fontSize: "12px" }}>{dueDate}</text>
      </div>
      <div className="task-side-box">
        <Icon icon="delete" color="#fb3931" />
      </div>
    </div>
  );
};
