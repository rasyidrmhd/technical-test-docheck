import pool from "../config/connection";
import { TodoList } from "../controllers/Todo_Controller";

class Todo_Model {
  static getAllTodoLists(cb: (err: Error | null, dataTodoLists: TodoList[]) => void) {
    const allTodoLists = `
          SELECT * FROM "TodoLists"
    `;

    pool.query(allTodoLists, (err, res) => {
      const result = res.rows.map((todoList: TodoList) => {
        const { id, task, description, checked, createdAt, dueDate } = todoList;
        return { id, task, description, checked, createdAt, dueDate };
      });
      cb(null, result);
    });
  }
}

export default Todo_Model;
