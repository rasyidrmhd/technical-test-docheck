import { Request, Response, Router } from "express";
import todos from "./todos";

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

    this.router.use("/todos", todos);
  }
}

export default new Routes().router;
