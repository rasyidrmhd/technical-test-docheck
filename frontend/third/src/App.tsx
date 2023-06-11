import React from "react";
import logo from "./logo.svg";
import { useAppSelector, useAppDispatch } from "./store";
import { addTask, checkTask, deleteTask } from "./store/features/taskSlice";
import "./App.css";

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
      if (!inputTaskName) {
        return;
      }
      dispatch(addTask({ name: inputTaskName }));
      setInputTaskName("");
    },
    [inputTaskName]
  );

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
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
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
