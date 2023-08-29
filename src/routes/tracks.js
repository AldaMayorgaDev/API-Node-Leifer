const express = require('express');
const router = express.Router();

//Declarar rutas http://localhost/tracks con los metodos GET, POST, DELETE, PUT

router.get("/", (req, res)=>{
    const data = ["Hola", "Mundo"];
    res.send({
        data: data
    });
})
module.exports = router;