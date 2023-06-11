import React from "react";
import { Icon } from "./Icon";
import { Task, checkTask, deleteTask, addTask } from "../store/features/taskSlice";
import { useAppDispatch } from "../store";

export const AddTaskCard: React.FC<{ showForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showForm }) => {
  const dispatch = useAppDispatch();
  const onSubmitSearch = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = e.currentTarget.task.value;
    const date = e.currentTarget.date.value;
    if (!task || !date) {
      return;
    }
    dispatch(addTask({ name: task, dueDate: new Date(date) }));
    showForm(false);
  }, []);
  return (
    <form onSubmit={onSubmitSearch}>
      <div className="card">
        <div className="card-side-box-column">
          <button type="submit" className="button-add-sm green">
            <Icon icon="add" color="white" size="18px" />
          </button>
          <button
            type="button"
            className="button-add-sm red"
            onClick={() => {
              showForm(false);
            }}
          >
            <Icon icon="close" color="white" size="18px" />
          </button>
        </div>
        <div className="card-body">
          <input type="text" name="task" className="input-task" placeholder="type your new task" />
          <br />
          <input type="date" name="date" className="input-calendar" />
        </div>
      </div>
    </form>
  );
};
