"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const fs_1 = __importDefault(require("fs"));
const tasks = JSON.parse(fs_1.default.readFileSync("../../data/tasks.json", "utf-8"));
let insertTasks = `INSERT INTO "TodoLists" ("task", "description", "dueDate") VALUES `;
tasks.forEach((task, idx) => {
    let { task: name, description, dueDate } = task;
    if (idx === tasks.length - 1) {
        insertTasks += `('${name}', '${description}', '${dueDate}');`;
    }
    else {
        insertTasks += `('${name}', '${description}', '${dueDate}'),`;
    }
});
connection_1.default.query(insertTasks, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfully seeding TodoLists with dummy data");
    }
});
