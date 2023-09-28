const bcryptjs = require('bcryptjs');

//Funcion de encriptar password

/**
 * Contrseña sin encriptar: hola.01
 * @param {*} passwordPlain
*/
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10) //Se encripta la contraseña utilizando bcryptjs,hash(stringAEncriptar, NumeroRandomEncriptamiento )
    return hash;

};


//funcion comparar password
/* Toma un Hash y un texo plano, los compara para validar si es la clave*/
/***
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain
 * @param {*} hashPassword
*/
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};


module.exports = {
    encrypt,
    compare
}