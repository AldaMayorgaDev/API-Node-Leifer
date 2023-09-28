
const express = require('express');
const router = express.Router();

//Validadores
const { validatorRegisterItem, validatorLogin } = require('../validators/auth');

//Controllers
const { loginController, registerController } = require('../controllers/auth');

//Rutas y Metodos
router.post("/register", validatorRegisterItem, registerController);


router.post("/login", validatorLogin, loginController);

module.exports = router;