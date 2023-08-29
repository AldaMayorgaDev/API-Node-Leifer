const express = require('express');
const router = express.Router();
const {getItems,getItem, createItem} = require('../controllers/tracks')
//Declarar rutas http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);

module.exports = router;