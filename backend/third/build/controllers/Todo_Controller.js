"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_Model_1 = __importDefault(require("../model/Todo_Model"));
class Todo_Controller {
    static getAllTodoLists(req, res) {
        const task = req.query.task;
        const description = req.query.description;
        const dueDate = req.query.dueDate;
        const search = { task, description, dueDate };
        const sortBy = req.query.sortBy;
        const orderBy = req.query.orderBy;
        Todo_Model_1.default.getAllTodoLists(search, sortBy, orderBy, (err, dataTodoLists) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(dataTodoLists);
            }
        });
    }
    static insertTodoList(req, res) {
        const { task, description, dueDate } = req.body;
        const values = { task, description, dueDate };
        Todo_Model_1.default.insertTodoList(values, (err, todoList) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(201).json({ task, description, dueDate, checked: todoList === null || todoList === void 0 ? void 0 : todoList.checked });
            }
        });
    }
    static deleteTodoListById(req, res) {
        const { id } = req.params;
        Todo_Model_1.default.deleteTodoListById(id, (err, todoList) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json({ message: `Task ${todoList === null || todoList === void 0 ? void 0 : todoList.task} deleted successfully` });
            }
        });
    }
    static updateTodoListById(req, res) {
        const { id } = req.params;
        const { task, description, dueDate } = req.body;
        const values = { task, description, dueDate };
        Todo_Model_1.default.updateTodoListById(id, values, (err, todoList) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json({ message: `Task updated successfully` });
            }
        });
    }
    static checkTodoListById(req, res) {
        const { id } = req.params;
        Todo_Model_1.default.checkTodoListById(id, (err, todoList) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json({ message: `Task ${todoList === null || todoList === void 0 ? void 0 : todoList.task} ${(todoList === null || todoList === void 0 ? void 0 : todoList.checked) ? "checked" : "unchecked"} successfully` });
            }
        });
    }
}
exports.default = Todo_Controller;
