const fs = require('fs');
const {storageModel}= require('../models');
const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleError');


const PUBLIC_URL= process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;


const getItem= async(req, res)=>{
    try {
        const { id } = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({
            data: data
        });

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_DETAIL_ITEM', 404)
    }
};


const getItems= async(req, res)=>{
    try {
        const data = await storageModel.find({})
        res.send({
            data: data
        });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 404)
    }
};


const createItem = async(req, res)=>{
    try {
        const {file}= req;
        const{filename} = file;
        const fileData ={
            fileName: file.filename,
            url: `${PUBLIC_URL}/${filename}`
        }
        const data = await storageModel.create(fileData)
        res.send({
            data
        });
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEM', 404)
    }
};

const deleteItem= async(req, res)=>{
    try {
        //Buscar si existe el archivo
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);

        //Eliimina definitavemente el registro en la BD

        await storageModel.deleteOne({_id:id});

        //obtener su nombre y extension y utilizarlo para generar la ruta absoluta
        const {fileName}= dataFile;
        const filePath = `${MEDIA_PATH}/${fileName}`;

        //Aqui se elimina el archivo de la carpeta storage.
        fs.unlinkSync(filePath);

        //Se crea el objeto que se enviara a respuesta (res)
        const data ={
            filePath,
            deleted:1,
            message: 'Eliminado exitosamente'
        }
        res.send({
            data: data
        });

    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_ITEM', 404)
    }
};


module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem,
}