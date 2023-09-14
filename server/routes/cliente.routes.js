import { Router } from "express";
import {
  getCliente,
  deleteCliente,
  postCliente,
  updateCliente,
  getClientes,
} from "../controllers/cliente.controllers.js";
const router = Router();

router.get("/cliente", getClientes);

router.get("/cliente/:id", getCliente);

router.post("/cliente", postCliente);

router.put("/cliente/:id", updateCliente);

router.delete("/cliente/:id", deleteCliente);

export default router;
