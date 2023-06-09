import pool from "../config/connection";
import { Task, TodoList } from "../types";

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

  static insertTodoList(data: Task, cb: (err: Error | null, todoList: Task) => void) {
    const { task, description, dueDate } = data;
    const insertTodoList = `
      INSERT INTO "TodoLists" ("task", "description", "dueDate")
      VALUES ('${task}', '${description}', '${dueDate}')
    `;
    pool.query(insertTodoList, (err, res) => {
      // const result = res.rows.map((todoList: TodoList) => {
      //   const { id, task, description, checked, createdAt, dueDate } = todoList;
      //   return { id, task, description, checked, createdAt, dueDate };
      // });
      cb(null, { task, description, dueDate });
    });
  }
}

export default Todo_Model;
