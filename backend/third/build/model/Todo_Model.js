"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../config/connection"));
class Todo_Model {
    static normalizeDate(date, withTime = false) {
        let options = { year: "numeric", month: "long", day: "numeric" };
        if (withTime) {
            options = Object.assign(Object.assign({}, options), { hour: "numeric", minute: "numeric" });
        }
        return date.toLocaleDateString("id-ID", options);
    }
    static getAllTodoLists(cb) {
        const allTodoLists = `
      SELECT * FROM "TodoLists"
    `;
        connection_1.default.query(allTodoLists, (err, res) => {
            const result = res.rows.map((todoList) => {
                const { id, task, description, checked, createdAt, dueDate } = todoList;
                return { id, task, description, checked, createdAt: this.normalizeDate(new Date(createdAt), true), dueDate: this.normalizeDate(new Date(dueDate)) };
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
