import { Request, Response, Router } from "express";
import todos from "./todos";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.use("/todos", todos);
  }
}

export default new Routes().router;
