"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: process.env.POSTGRES_USER,
    host: "localhost",
    database: "simple_todolist",
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});
exports.default = pool;
