
const express = require('express');
const router = express.Router();

//Validadores
const { validatorRegisterItem, validatorLogin } = require('../validators/auth');

//Controllers
const { loginController, registerController } = require('../controllers/auth');

//Rutas y Metodos


/**
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usuario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/authRegister'
 *          responses:
 *              '201':
 *                  description: Usuario registrado de manera correcta
 *              '403':
 *                  description: Error por validación de usuario
 */
router.post("/register", validatorRegisterItem, registerController);


/**
 * Login user
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Login user"
 *      description: Iniciar session a un nuevo usuario y obtener el token de sesión
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/authLogin"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post("/login", validatorLogin, loginController);

module.exports = router;