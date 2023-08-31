const handleHttpError = (res, menssage = 'Ocurrio lago inesperado', code = 403)=>{

    res.status(code);
    res.send({error: menssage});
}

module.exports ={
    handleHttpError,

}