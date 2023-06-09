import { Request, Response } from "express";
import Todo_Model from "../model/Todo_Model";
import { TodoList } from "../types";

class Todo_Controller {
  static getAllTodoLists(req: Request, res: Response) {
    Todo_Model.getAllTodoLists((err, dataTodoLists) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(dataTodoLists);
      }
    });
  }

  static insertTodoList(req: Request, res: Response) {
    const { task, description, dueDate } = req.body as TodoList;
    const values = { task, description, dueDate };
    Todo_Model.insertTodoList(values, (err, todoList) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).json({ task, description, dueDate, checked: todoList.checked });
      }
    });
  }

  static deleteTodoListById(req: Request, res: Response) {
    const { id } = req.params;
    Todo_Model.deleteTodoListById(id, (err, todoList) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({ message: `Task ${todoList?.task} deleted successfully` });
      }
    });
  }
}

export default Todo_Controller;