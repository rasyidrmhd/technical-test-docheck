import React from "react";
import { Icon } from "./Icon";
import { Task, checkTask, deleteTask } from "../store/features/taskSlice";
import { useAppDispatch } from "../store";

export const TaskCard: React.FC<Task> = ({ id, name, dueDate, checked }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="card">
      <div className="card-side-box">
        <div className={`checked-box ${checked ? "checked" : ""}`} onClick={() => dispatch(checkTask({ id }))}>
          {checked && <Icon icon="check" color="white" size="16px" weight="800" />}
        </div>
      </div>
      <div className="card-body">
        <text>{name}</text>
        <br />
        <text style={{ color: "#2fcc71", fontSize: "12px" }}>{dueDate}</text>
      </div>
      <div className="card-side-box">
        <button className="button-delete" onClick={() => dispatch(deleteTask({ id }))}>
          <Icon icon="delete" color="#fb3931" />
        </button>
      </div>
    </div>
  );
};
