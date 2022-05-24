const { Router } = require('express');
const router = Router();

const { autenticar } = require('../controllers/authenticate.controller');

/**
 * @swagger
 * /autenticar:
 *   post:
 *     description: Use to create a user.
 *     tags: 
 *       - Autenticacion
 *     parameters:
 *       - in: body
 *         name: autenticacion
 *         description: Autenticacion
 *         schema:
 *           type: object
 *           required:
 *              - username
 *           properties:
 *              usuario:
 *                  type: string
 *                  example: "nombre"
 *              contrasena:
 *                  type: string
 *                  example: "abcdef123456"
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
 router.post('/autenticar', autenticar);