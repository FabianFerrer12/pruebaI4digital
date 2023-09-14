import { Router } from "express";
import { pool } from "../db.js";
const router = Router();

router.get("/ping", async (req, res) => {
  const [row] = await pool.query("SELECT 1+1 as result");
  console.log(row);
  res.json(row);
});

export default router;
