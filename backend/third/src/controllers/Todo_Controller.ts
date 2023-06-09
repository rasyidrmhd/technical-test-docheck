import { Request, Response } from "express";
import Todo_Model from "../model/Todo_Model";
import { TodoList } from "../types";

class Todo_Controller {
  static getAllTodoLists(req: Request, res: Response) {
    Todo_Model.getAllTodoLists((err, dataTodoLists) => {
      res.status(200).json(dataTodoLists);
    });
  }

  static insertTodoList(req: Request, res: Response) {
    const { task, description, dueDate } = req.body as TodoList;
    const values = { task, description, dueDate };
    Todo_Model.insertTodoList(values, (err, todoList) => {
      console.log(todoList, ">>>>>>rodolist");

      res.status(201).json({ task: todoList.task, description: todoList.description, dueDate: todoList.dueDate });
    });
  }
}

export default Todo_Controller;
