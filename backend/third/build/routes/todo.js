"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Todo {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.send("this is all list");
        });
        this.router.post("/create", (req, res) => {
            res.send(req.body);
        });
    }
}
exports.default = new Todo().router;
