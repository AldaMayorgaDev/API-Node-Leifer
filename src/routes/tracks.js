const express = require('express');
const router = express.Router();
const { getItems, getItem, updateItem, createItem, deleteItem } = require('../controllers/tracks');


//validators
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');


//middlewares
const { authMiddleware } = require('../middleware/session')
const { checkRol } = require('../middleware/rol')


//Declarar rutas http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;