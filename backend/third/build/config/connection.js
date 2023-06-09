"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.POSTGRES_USER,
    host: "localhost",
    database: "simple_todolist",
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});
exports.default = pool;
