import { Request, Response, Router } from "express";

class Todo {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("this is all list");
    });

    this.router.post("/create", (req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

export default new Todo().router;
