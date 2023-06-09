import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "localhost",
  database: "simple_todolist",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export default pool;
