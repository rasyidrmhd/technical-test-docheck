import pool from "./connection";
import fs from "fs";

interface Task {
  task: string;
  description: string;
  dueDate: Date;
}

const tasks: Task[] = JSON.parse(fs.readFileSync("../../data/tasks.json", "utf-8"));
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
