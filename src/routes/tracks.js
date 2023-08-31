const express = require('express');
const router = express.Router();
const {getItems,getItem, updateItem, createItem, deleteItem} = require('../controllers/tracks');


//validators
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');


//middlewares



//Declarar rutas http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id",validatorGetItem, getItem);
router.put("/:id",validatorGetItem,validatorCreateItem, updateItem);
router.post("/", validatorCreateItem,createItem);
router.delete("/:id",validatorGetItem, deleteItem);

module.exports = router;