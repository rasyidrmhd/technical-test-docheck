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
}
exports.default = Todo_Model;
