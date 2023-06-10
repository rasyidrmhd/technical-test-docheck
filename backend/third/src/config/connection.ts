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
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
  });
}

export default pool;
