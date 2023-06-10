"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../config/connection"));
class Todo_Model {
    static getAllTodoLists(cb) {
        const allTodoLists = `
      SELECT * FROM "TodoLists"
    `;
        connection_1.default.query(allTodoLists, (err, res) => {
            const result = res.rows.map((todoList) => {
                const { id, task, description, checked, createdAt, dueDate } = todoList;
                return { id, task, description, checked, createdAt, dueDate };
            });
            cb(null, result);
        });
    }
    static insertTodoList(data, cb) {
        const { task, description, dueDate } = data;
        const insertTodoList = `
      INSERT INTO "TodoLists" ("task", "description", "dueDate")
      VALUES ('${task}', '${description}', '${dueDate}')
      RETURNING *
    `;
        connection_1.default.query(insertTodoList, (err, res) => {
            const result = res.rows.map((todoList) => {
                const { id, task, description, checked, createdAt, dueDate } = todoList;
                return { id, task, description, checked, createdAt, dueDate };
            });
            cb(null, result[0]);
        });
    }
    static deleteTodoListById(id, cb) {
        const deleteTodoListById = `
      DELETE FROM "TodoLists"
      WHERE "id" = '${id}'
      RETURNING *
    `;
        connection_1.default.query(deleteTodoListById, (err, res) => {
            if (err) {
                cb(err, null);
            }
            else {
                const result = res.rows.map((todoList) => {
                    const { id, task, description, checked, createdAt, dueDate } = todoList;
                    return { id, task, description, checked, createdAt, dueDate };
                });
                cb(null, result[0]);
            }
        });
    }
    static updateTodoListById(id, data, cb) {
        const { task, description, dueDate } = data;
        console.log(data, id, ">>>>model");
        const updateTodoListById = `
      UPDATE "TodoLists"
      SET "task" = '${task}', "description" = '${description}', "dueDate" = '${dueDate}'
      WHERE "id" = '${id}'
      RETURNING *
    `;
        connection_1.default.query(updateTodoListById, (err, res) => {
            if (err) {
                cb(err, null);
            }
            else {
                const result = res.rows.map((todoList) => {
                    const { id, task, description, checked, createdAt, dueDate } = todoList;
                    return { id, task, description, checked, createdAt, dueDate };
                });
                cb(null, result[0]);
            }
        });
    }
}
exports.default = Todo_Model;
