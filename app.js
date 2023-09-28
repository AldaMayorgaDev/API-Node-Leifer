require("dotenv").config();
const express = require('express');
const cors = require('cors');

const morganBody = require('morgan-body');
const dbConnect = require('./src/config/mongo');
const app = express();
const { loggerStream } = require('./src/utils/monitoreo-slack/handleLooger')

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

dbConnect();