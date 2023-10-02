require("dotenv").config();
const express = require('express');
const cors = require('cors');

const morganBody = require('morgan-body');
const { loggerStream } = require('./src/utils/monitoreo-slack/handleLooger')
const dbConnectNoSQL = require('./src/config/mongo');
const { dbConnectMysql } = require('./src/config/mysql')
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;


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
const port = 8080;

app.use("/api", require("./src/routes"))

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`);
});


(ENGINE_DB === 'nosql') ? dbConnectNoSQL() : dbConnectMysql();
