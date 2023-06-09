import express, { Application } from "express";
import routes from "./routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.routes();
  }

  protected routes(): void {
    this.app.use("/", routes);
  }
}

const port: string | number = process.env.PORT || 3000;
const app = new App().app;

app.listen(port, () => {
  console.log("run on port ", port);
});
