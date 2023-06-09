import { Task } from "../types";
import pool from "./connection";
import fs from "fs";

const tasks: Task[] = JSON.parse(fs.readFileSync("./src/data/tasks.json", "utf-8"));
let insertTasks = `INSERT INTO "TodoLists" ("task", "description", "dueDate") VALUES `;

tasks.forEach((task, idx) => {
  let { task: name, description, dueDate } = task;

  if (idx === tasks.length - 1) {
    insertTasks += `('${name}', '${description}', '${dueDate}');`;
  } else {
    insertTasks += `('${name}', '${description}', '${dueDate}'),`;
  }
});

pool.query(insertTasks, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully seeding TodoLists with dummy data");
  }
});
