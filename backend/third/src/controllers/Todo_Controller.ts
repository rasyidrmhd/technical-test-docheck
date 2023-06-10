import { Request, Response } from "express";
import Todo_Model from "../models/Todo_Model";
import { Task } from "../types";

class Todo_Controller {
  static getAllTodoLists(req: Request, res: Response) {
    const task = req.query.task as string;
    const description = req.query.description as string;
    const dueDate = req.query.dueDate as string;
    const search = { task, description, dueDate };

    const sortBy = req.query.sortBy as string;
    const orderBy = req.query.orderBy as string;

    Todo_Model.getAllTodoLists(search, sortBy, orderBy, (err, dataTodoLists) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(dataTodoLists);
      }
    });
  }

  static insertTodoList(req: Request, res: Response) {
    const { task, description, dueDate } = req.body as Task;
    const values = { task, description, dueDate };
    Todo_Model.insertTodoList(values, (err, todoList) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json({ task, description, dueDate, checked: todoList?.checked });
      }
    });
  }

  static deleteTodoListById(req: Request, res: Response) {
    const { id } = req.params;
    Todo_Model.deleteTodoListById(id, (err, todoList) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: `Task ${todoList?.task} deleted successfully` });
      }
    });
  }

  static updateTodoListById(req: Request, res: Response) {
    const { id } = req.params;
    const { task, description, dueDate } = req.body;
    const values = { task, description, dueDate };
    Todo_Model.updateTodoListById(id, values, (err, todoList) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: `Task updated successfully` });
      }
    });
  }

  static checkTodoListById(req: Request, res: Response) {
    const { id } = req.params;
    Todo_Model.checkTodoListById(id, (err, todoList) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: `Task ${todoList?.task} ${todoList?.checked ? "checked" : "unchecked"} successfully` });
      }
    });
  }
}

export default Todo_Controller;
