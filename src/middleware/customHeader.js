const customHeader=(req, res, next) => {

    try {
        const {api_key} = req.headers;
        if(api_key === "Aldahir-mg01"){
            next();
        }else{
            res.status(403)
            res.send({error: "API_KEY_NO_ES_CORRECTA"})

        }
        
    } catch (error) {
        res.status(403)
        res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"})
    }
};

module.exports= customHeader;