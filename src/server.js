// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers
const express = require('express');

const server = express();
/**
 *
 * Aqui invocamos las rutas 
 */
 
server.use("/api", require('./routes/tracks'))



module.exports = server;