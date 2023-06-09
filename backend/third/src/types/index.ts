interface Task {
  task: string;
  description: string;
  dueDate: Date;
}

interface TodoList {
  id: number;
  task: string;
  description: string;
  checked: boolean;
  createdAt: Date;
  dueDate: Date;
}

export { Task, TodoList };
