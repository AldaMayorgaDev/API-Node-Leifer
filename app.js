require("dotenv").config();

const express = require('express');
const cors = require('cors');

// ** Swagger Docs
const swaggerUI = require('swagger-ui-express');
const { openApiConfiguration } = require('./docs/swagger');

// ** Monitoreo Errors Slack
const morganBody = require('morgan-body');
const { loggerStream } = require('./src/utils/monitoreo-slack/handleLooger');

// ** DB connections
const dbConnectNoSQL = require('./src/config/mongo');
const { dbConnectMysql } = require('./src/config/mysql')


const app = express();
const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';


app.use(cors());
app.use(express.json());
app.use(express.static('./src/storage')); //archivos publicos


//Enviar Errores a Slack
morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400
    }
})
//const port = 8080;
const port = process.env.PORT || 3000;
/**
 * Definir ruta de documentacion
*/

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration))
app.use("/api", require("./src/routes"))

if (NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Tu app esta lista por http://localhost:${port}`);
    });
}



(ENGINE_DB === 'nosql') ? dbConnectNoSQL() : dbConnectMysql();

module.exports = app;