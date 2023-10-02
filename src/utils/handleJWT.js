const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

//1.- Generar el token
/**
 * Debes de pasar el objeto del usuario
 * @param {*} user  
 */
const tokenSign = async (user) => {

    //Firmar el token
    const sign = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        }
        , JWT_SECRET,
        {
            expiresIn: "2h",
        }
    )
    return sign; //Retorna el jwt del usuario
};


//2.- Verificar el token
/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {

    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}


module.exports = {
    tokenSign,
    verifyToken
}