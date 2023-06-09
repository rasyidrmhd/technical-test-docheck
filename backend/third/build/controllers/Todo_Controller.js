"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_Model_1 = __importDefault(require("../model/Todo_Model"));
class Todo_Controller {
    static getAllTodoLists(req, res) {
        Todo_Model_1.default.getAllTodoLists((err, dataTodoLists) => {
            res.status(200).json(dataTodoLists);
        });
    }
    static insertTodoList(req, res) {
        const { task, description, dueDate } = req.body;
        const values = { task, description, dueDate };
        Todo_Model_1.default.insertTodoList(values, (err, todoList) => {
            console.log(todoList, ">>>>>>rodolist");
            res.status(201).json({ task: todoList.task, description: todoList.description, dueDate: todoList.dueDate });
        });
    }
}
exports.default = Todo_Controller;
