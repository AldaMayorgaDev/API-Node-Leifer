const express = require('express');
const router = express.Router();
const {uploadMiddleware} = require('../utils/handleStorage');
const {getItems,getItem, createItem, deleteItem} = require('../controllers/storage');

//validators
const { validatorGetItem } = require('../validators/storage');

//Rutas y metodos
router.get("/", getItems);
router.get("/:id",validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"),createItem);
router.delete("/:id",validatorGetItem, deleteItem);


module.exports = router;