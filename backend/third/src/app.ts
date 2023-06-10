import express, { Application } from "express";
import swaggerUI from "swagger-ui-express";
import apiDoc from "./openapi.json";
import routes from "./routes";
import pool from "./config/connection";

class App {
  public app: Application;
  public port: string | number;
  private swaggerCss: string;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;
    this.swaggerCss = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.min.css";

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.routes();
  }

  protected routes(): void {
    this.app.use("/", routes);
    this.app.use("/documentation", swaggerUI.serve, swaggerUI.setup(apiDoc, { customCssUrl: this.swaggerCss }));
  }

  public listen() {
    pool.connect((err) => {
      if (err) throw err;
      console.log("connect to PostgreSQL successfully");

      this.app.listen(this.port, () => {
        console.log("run on port ", this.port);
      });
    });
  }
}

export default App;
