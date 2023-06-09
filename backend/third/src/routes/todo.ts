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

    this.router.post("/create", (req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

export default new Todo().router;
