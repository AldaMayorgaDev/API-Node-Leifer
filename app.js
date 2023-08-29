require ("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./src/config/mongo');
const app = express();


app.use(cors());
app.use(express.json());

const port = 8080;

app.use("/api", require("./src/routes"))

app.listen(port,() =>{
    console.log(`Tu app esta lista por http://localhost:${port}`);
});

dbConnect();