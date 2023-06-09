import dotenv from "dotenv";
dotenv.config();
import App from "../app";

const port = process.env.PORT || 3000;
new App(port).listen();
