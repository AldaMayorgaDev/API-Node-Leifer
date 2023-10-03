const mongoose = require('mongoose');

const NODE_ENV = process.env.NODE_ENV
const dbConnect = async () => {


    const {
        DB_USER,
        DB_PASSWORD,
        DB_HOST,
        DB_NAME,
        DB_URI_PROV,
        DB_URI_PROV_TEST,
        DB_URI,
        DB_URI_TEST
    } = process.env;

    console.log("🚀 ~ dbConnect ~ DB_URI_PROV:", typeof DB_URI_PROV);
    console.log("🚀 ~ dbConnect ~ DB_URI:", DB_URI)

    const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

    const url = (NODE_ENV === 'test') ? DB_URI_PROV_TEST : DB_URI_PROV;

    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('**** Conexion a la BD establecida con éxito ****')
        })
        .catch((error) => {
            console.log('**** Error en Conexion a la BD **** \n error: ', error)
        })

}

module.exports = dbConnect;