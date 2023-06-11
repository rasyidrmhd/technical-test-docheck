import React from "react";
import { useAppSelector } from "./store";
import "./App.css";
import AddButton from "./components/AddButton";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { AddTaskCard } from "./components/AddTaskCard";

function App() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [inputSearch, setInputSearch] = React.useState<string>("");

  const filteredTasks = React.useMemo(() => {
    if (!inputSearch) {
      return tasks;
    }
    return tasks.filter((task) => task.name.toLowerCase().includes(inputSearch.toLowerCase().trim()));
  }, [inputSearch, tasks]);

  const onSubmitSearch = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSearch(e.currentTarget.search.value);
  }, []);

  return (
    <div className="app">
      <Header onSubmit={onSubmitSearch} />
      <div className="white-box">
        {tasks.length > 0 || showForm ? (
          <div className="card-group">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} id={task.id} name={task.name} checked={task.checked} dueDate={task.dueDate}></TaskCard>
            ))}
            {showForm && <AddTaskCard showForm={setShowForm} />}
          </div>
        ) : (
          <div className="empty-task">
            <text>You don't have any task yet. Click button below to add new task.</text>
          </div>
        )}
      </div>
      <AddButton onClick={() => setShowForm(true)} />
    </div>
  );
}

export default App;
