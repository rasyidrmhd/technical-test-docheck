import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
  checked: boolean;
}

const initialState: { tasks: Task[] } = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      const newId = state.tasks.length === 0 ? 1 : state.tasks[state.tasks.length - 1].id + 1;
      state.tasks.push({
        id: newId,
        name: action.payload.name,
        checked: false,
      });
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const deletedTaskId = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (deletedTaskId !== -1) {
        state.tasks.splice(deletedTaskId, 1);
      }
    },
    checkTask: (state, action: PayloadAction<{ id: number }>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      });
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask, checkTask } = taskSlice.actions;
