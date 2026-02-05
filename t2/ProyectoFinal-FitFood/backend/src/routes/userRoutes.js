import express from 'express';
import { obtenerPerfil, actualizarPerfil } from '../controllers/userController.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:id', autenticar, obtenerPerfil);
router.put('/:id', autenticar, actualizarPerfil);

export default router;
