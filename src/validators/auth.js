const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorRegisterItem = [
    check("name")
        .exists()
        .notEmpty()
        .isLength(
            {
                min: 3,
                max: 90
            }
        ),
    check("age").exists().notEmpty().isNumeric({ min: 5, max: 120 }),
    check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
    check("email").exists().notEmpty().isEmail(),

    //devolver siempre una respuesta
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorLogin = [
    check("password").exists().notEmpty().isLength({ min: 3, max: 90 }),
    check("email").exists().notEmpty().isEmail(),
    //devolver siempre una respuesta
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];




module.exports = {
    validatorRegisterItem,
    validatorLogin
};