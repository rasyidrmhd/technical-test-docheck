"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const createTodoLists = `
    CREATE TABLE "TodoList" (
      "id" SERIAL PRIMARY KEY,
      "task"  VARCHAR(100),
      "description" VARCHAR(255),
      "checked" BOOLEAN DEFAULT FALSE,
      "createdAt" TIMESTAMP DEFAULT NOW(),
      "dueDate" DATE
    )
`;
connection_1.default.query(createTodoLists, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfully create TodoLists table");
    }
});
