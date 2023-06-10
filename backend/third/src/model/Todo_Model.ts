import pool from "../config/connection";
import { Task, TodoList } from "../types";

class Todo_Model {
  static normalizeDate(date: Date, withTime: boolean = false) {
    let options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    if (withTime) {
      options = { ...options, hour: "numeric", minute: "numeric" };
    }
    return date.toLocaleDateString("id-ID", options);
  }

  static getAllTodoLists(cb: (err: Error | null, dataTodoLists: TodoList[]) => void) {
    const allTodoLists = `
      SELECT * FROM "TodoLists"
    `;

    pool.query(allTodoLists, (err, res) => {
      const result = res.rows.map((todoList: TodoList) => {
        const { id, task, description, checked, createdAt, dueDate } = todoList;
        return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
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
        return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
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
          return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
        });
        cb(null, result[0]);
      }
    });
  }

  static updateTodoListById(id: string, data: Task, cb: (err: Error | null, updated: TodoList | null) => void) {
    const { task, description, dueDate } = data;
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
          return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
        });
        cb(null, result[0]);
      }
    });
  }

  static checkTodoListById(id: string, cb: (err: Error | null, updated: TodoList | null) => void) {
    const selectedTask = `
      SELECT * From "TodoLists"
      WHERE "id" = '${id}'
    `;

    pool.query(selectedTask, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        const result = res.rows.map((todoList: TodoList) => {
          const { checked } = todoList;
          return { checked };
        });
        const statusTask = result[0].checked;
        const checkTodoListById = `
          UPDATE "TodoLists"
          set "checked" = '${!statusTask}'
          WHERE "id" = '${id}'
          RETURNING *
        `;
        pool.query(checkTodoListById, (err, res) => {
          if (err) {
            cb(err, null);
          } else {
            const result = res.rows.map((todoList: TodoList) => {
              const { id, task, description, checked, createdAt, dueDate } = todoList;
              return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
            });
            cb(null, result[0]);
          }
        });
      }
    });
  }
}

export default Todo_Model;
