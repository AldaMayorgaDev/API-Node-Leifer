const {validationResult} = require('express-validator');

const validateResults =(req, res, next) => {
    try {
        validationResult(req).throw(); //Valida las cosas que se están enviando por la peticion, si no pasan la validacion lanza un error y entra al catch
        return next(); //En caso de que si pasen la validacion, continua hacia el controlador:
    } catch (err) {
        res.status(403);
        res.send({
            errors: err.array()
        })
    }
}

module.exports= validateResults;