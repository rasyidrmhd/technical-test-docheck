"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const connection_1 = __importDefault(require("./config/connection"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.routes();
    }
    routes() {
        this.app.use("/", routes_1.default);
    }
    listen() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log("connect to PostgreSQL successfully");
            this.app.listen(this.port, () => {
                console.log("run on port ", this.port);
            });
        });
    }
}
exports.default = App;
