const {removeExtension} = require("../utils/helpers/functions");
const express = require("express");
const fs= require("fs");

const router = express.Router();

const PATH_ROUTES = __dirname;



fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file); // users, storage, tracks
    if(name !== 'index'){
        console.log('Cargando ruta', name );
        router.use(`/${name}`, require(`./${file}`)) // http://localhost:PORT/api/users
    }
})



module.exports= router;