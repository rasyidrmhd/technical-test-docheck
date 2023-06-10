import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

let pool: Pool;
if (process.env.NODE_ENV === "production") {
  pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  });
} else {
  pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: "localhost",
    database: "simple_todolist",
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  });
}

export default pool;
