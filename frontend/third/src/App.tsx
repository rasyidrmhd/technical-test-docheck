import React from "react";
import logo from "./logo.svg";
import { useAppSelector, useAppDispatch } from "./store";
import { addTask } from "./store/features/taskSlice";
import "./App.css";

function App() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    console.log(tasks, ">>>>task");
  }, [tasks]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <button
        onClick={() => {
          dispatch(addTask({ name: "belajar gitar" }));
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;
