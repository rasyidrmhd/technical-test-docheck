import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
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
      });
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const deletedTaskId = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks.splice(deletedTaskId, 1);
    },
  },
});

export default taskSlice.reducer;
export const { addTask, deleteTask } = taskSlice.actions;
