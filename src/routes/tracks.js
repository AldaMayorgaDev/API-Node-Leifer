const express = require('express');
const router = express.Router();
const {getItems,getItem, createItem} = require('../controllers/tracks');


//validators
const { validatorCreateItem } = require('../validators/tracks');

//middlewares
const customHeader = require('../middleware/customHeader');



//Declarar rutas http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router;