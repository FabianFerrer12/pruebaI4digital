import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "i4digital",
  port: 3306,
});
