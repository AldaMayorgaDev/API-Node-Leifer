const mongoose = require('mongoose');

const dbConnect = async () => {


    const {
        DB_USER, 
        DB_PASSWORD, 
        DB_HOST, 
        DB_NAME,
        DB_URI_PROV,
        DB_URI
    } = process.env;

    console.log("🚀 ~ dbConnect ~ DB_URI_PROV:", typeof DB_URI_PROV);
    console.log("🚀 ~ dbConnect ~ DB_URI:", DB_URI)
    
    const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


        await mongoose.connect( URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=>{
            console.log('**** Conexion a la BD establecida con éxito ****')
        })
        .catch((error)=>{
            console.log('**** Error en Conexion a la BD **** \n error: ', error)
        })

}

module.exports = dbConnect;