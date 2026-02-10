// Rutas de autenticación: registro, login y verificación de usuario
import express from 'express';
import { registrar, login, verificarToken } from '../controllers/userController.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/auth/registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               email:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               contrasena:
 *                 type: string
 *               rol:
 *                 type: string
 *                 enum: [usuario, nutricionista, admin]
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/registro', registrar);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               contrasena:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Usuario o contraseña incorrectos
 */
router.post('/login', login);
/**
 * @swagger
 * /api/auth/verificar:
 *   get:
 *     summary: Verificar token de usuario
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 *       401:
 *         description: Token inválido o expirado
 */
router.get('/verificar', autenticar, verificarToken);

export default router;
