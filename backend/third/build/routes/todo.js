"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Todo_Controller_1 = __importDefault(require("../controllers/Todo_Controller"));
class Todo {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", Todo_Controller_1.default.getAllTodoLists);
        this.router.post("/", Todo_Controller_1.default.insertTodoList);
        this.router.delete("/:id", Todo_Controller_1.default.deleteTodoListById);
    }
}
exports.default = new Todo().router;
