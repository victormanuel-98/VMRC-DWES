// src/routes/notas.routes.js
import { Router } from "express";
import * as notasController from "../controllers/notas.controller.js";
import { authenticateToken, requireAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", notasController.getAll);
router.get("/:id", notasController.getById);

// Crear/editar requieren estar autenticado
router.post("/", authenticateToken, notasController.create);
router.put("/:id", authenticateToken, notasController.update);

// Borrar solo admin
router.delete("/:id", authenticateToken, requireAdmin, notasController.remove);

export default router;
