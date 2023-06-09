import { Request, Response, Router } from "express";
import todo from "./todo";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("this is initial simple todo list with ts implementation");
    });

    this.router.use("/todo", todo);
  }
}

export default new Routes().router;
