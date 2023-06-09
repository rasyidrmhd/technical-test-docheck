import express, { Application } from "express";
import routes from "./routes";
import pool from "./config/connection";

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
    pool.connect((err) => {
      if (err) throw err;
      console.log("connect to Postgre successfully");

      this.app.listen(this.port, () => {
        console.log("run on port ", this.port);
      });
    });
  }
}

export default App;
