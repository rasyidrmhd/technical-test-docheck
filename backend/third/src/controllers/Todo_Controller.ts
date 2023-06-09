import { Request, Response } from "express";
import Todo_Model from "../model/Todo_Model";

export interface TodoList {
  id: number;
  task: string;
  description: string;
  checked: boolean;
  createdAt: Date;
  dueDate: Date;
}

class Todo_Controller {
  static getAllTodoLists(req: Request, res: Response) {
    Todo_Model.getAllTodoLists((err, dataTodoLists) => {
      res.status(200).json(dataTodoLists);
    });
  }
}

export default Todo_Controller;
