import { Request, Response, Router } from "express";
import Todo_Controller from "../controllers/Todo_Controller";

class Todo {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", Todo_Controller.getAllTodoLists);
    this.router.post("/", Todo_Controller.insertTodoList);
    this.router.delete("/:id", Todo_Controller.deleteTodoListById);
  }
}

export default new Todo().router;
