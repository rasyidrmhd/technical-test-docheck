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

  static insertTodoList(data: Task, cb: (err: Error | null, todoList: TodoList) => void) {
    const { task, description, dueDate } = data;
    const insertTodoList = `
      INSERT INTO "TodoLists" ("task", "description", "dueDate")
      VALUES ('${task}', '${description}', '${dueDate}')
      RETURNING *
    `;

    pool.query(insertTodoList, (err, res) => {
      const result = res.rows.map((todoList: TodoList) => {
        const { id, task, description, checked, createdAt, dueDate } = todoList;
        return { id, task, description, checked, createdAt, dueDate };
      });
      cb(null, result[0]);
    });
  }

  static deleteTodoListById(id: string, cb: (err: Error | null, deleted: TodoList | null) => void) {
    const deleteTodoListById = `
      DELETE FROM "TodoLists"
      WHERE "id" = '${id}'
      RETURNING *
    `;

    pool.query(deleteTodoListById, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const result = res.rows.map((todoList: TodoList) => {
          const { id, task, description, checked, createdAt, dueDate } = todoList;
          return { id, task, description, checked, createdAt, dueDate };
        });
        cb(null, result[0]);
      }
    });
  }

  static updateTodoListById(id: string, data: Task, cb: (err: Error | null, updated: TodoList | null) => void) {
    const { task, description, dueDate } = data;
    console.log(data, id, ">>>>model");

    const updateTodoListById = `
      UPDATE "TodoLists"
      SET "task" = '${task}', "description" = '${description}', "dueDate" = '${dueDate}'
      WHERE "id" = '${id}'
      RETURNING *
    `;

    pool.query(updateTodoListById, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const result = res.rows.map((todoList: TodoList) => {
          const { id, task, description, checked, createdAt, dueDate } = todoList;
          return { id, task, description, checked, createdAt, dueDate };
        });
        cb(null, result[0]);
      }
    });
  }
}

export default Todo_Model;
