import express, { Application } from "express";
import routes from "./routes";

class App {
  public app: Application;
  public port: string | number;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.routes();
  }

  protected routes(): void {
    this.app.use("/", routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("run on port ", this.port);
    });
  }
}

export default App;
