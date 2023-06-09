import pool from "./connection";

const createTodoLists = `
    CREATE TABLE IF NOT EXISTS "TodoLists" (
      "id" SERIAL PRIMARY KEY,
      "task"  VARCHAR(100),
      "description" VARCHAR(255),
      "checked" BOOLEAN DEFAULT FALSE,
      "createdAt" TIMESTAMP DEFAULT NOW(),
      "dueDate" DATE
    )
`;

pool.query(createTodoLists, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully create TodoLists table");
  }
});
