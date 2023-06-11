import React from "react";
import { useAppSelector, useAppDispatch } from "./store";
import { addTask, checkTask, deleteTask } from "./store/features/taskSlice";
import "./App.css";
import { Icon } from "./components/Icon";
import AddButton from "./components/AddButton";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

function App() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();
  const [inputTaskName, setInputTaskName] = React.useState<string>("");

  React.useEffect(() => {
    console.log(tasks, ">>>>task");
  }, [tasks]);

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTask({ name: inputTaskName, dueDate: "16 Juni 2023" }));
      setInputTaskName("");
    },
    [inputTaskName]
  );

  return (
    <div className="app">
      <Header />
      <AddButton />
      <div className="white-box">
        {tasks.map((task) => (
          <TaskCard key={task.id} id={task.id} name={task.name} checked={task.checked} dueDate={task.dueDate}></TaskCard>
        ))}
      </div>
      {/* <form onSubmit={onSubmit}>
        <input type="text" value={inputTaskName} onChange={(e) => setInputTaskName(e.target.value)} />
        <button type="submit">add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => {
              dispatch(checkTask({ id: task.id }));
            }}
            onDoubleClick={() => {
              dispatch(deleteTask({ id: task.id }));
            }}
            style={{ margin: 10 }}
          >
            {task.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
