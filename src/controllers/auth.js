//models
const { usersModel } = require('../models/');

//Validators
const { matchedData } = require('express-validator');


//handles
const { tokenSign } = require('../utils/handleJWT');
const { encrypt, compare } = require('../utils/handlePassword');
const { handleHttpError } = require('../utils/handleError')


const ENGINE_DB = process.env.ENGINE_DB;
const registerController = async (req, res) => {
        try {

                req = matchedData(req);
                const password = await encrypt(req.password)
                const body = { ...req, password: password }

                const dataUser = await usersModel.create(body);
                dataUser.set('password', undefined, { strict: false });



                const data = {
                        token: await tokenSign(dataUser),
                        user: dataUser,
                }


                res.send({ data: data })
        } catch (e) {
                handleHttpError(res, "ERROR_REGISTER_USER")
        }
}

/**
 * Es controlador es el encargado de logear a una persona
*/
const loginController = async (req, res) => {

        try {
                req = matchedData(req);

                let user;
                let tipoUser = '';

                if (ENGINE_DB === 'nosql') {
                        user = await usersModel.findOne({ email: req.email });
                        tipoUser = 'nosql'
                } else {
                        user = await usersModel.findOne({ where: { email: req.email } });
                        tipoUser = 'mysql';

                }

                console.log("🚀 ~ loginController ~ user:", tipoUser)

                if (!user) {
                        handleHttpError(res, "ERROR_USER_NOT_EXISTS", 404);
                        return;
                }
                const hashPassword = user.get('password');
                //console.log("🚀 ~ loginController ~ hashPassword:", hashPassword)

                const check = await compare(req.password, hashPassword)
                /* console.log("🚀 ~ loginController ~ check:", check) */


                if (!check) {
                        handleHttpError(res, "PASSWORD_INVALID", 401);
                        return;
                }

                user.set('password', undefined, { strict: false })
                const data = {
                        token: await tokenSign(user),
                        user: user
                }
                res.send({ data })

                console.log('todo Ok')
        } catch (e) {
                console.log("🚀 ~ loginController ~ e:", e)

                handleHttpError(res, "ERROR_LOGIN_USER")
        }
}
module.exports = { loginController, registerController };