/**
 * El controlador va a ser la parte en la que se va a contener la lógica de la aplicación
 *  
 */

const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**
 * Obtener lista de la BD
 * 
*/
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({
            data: data
        });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }
};


/**
 * Obtener un elemento
 * 
*/
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id);
        res.send({
            data: data
        });

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM', 404)
    }
};


/**
 * Insertar un regristro
 * 
*/
const createItem = async (req, res) => {
    try {
        const body = matchedData(req) //matchedData(req) limpia el req de manera que solo coincida con lo que se establecio en el validator, quita datos que puedan ser agregados en la req por error o malisia
        const data = await tracksModel.create(body)
        res.send({
            data: data
        })
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEM', 403)
    }
};


/**
 * Actualizar un registro
 * 
*/
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(id, body, {new:true});
        const dataActualizada = data;
        res.send({
            data: dataActualizada
        })
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATE_ITEM', 403)
    }
};


/**
 * Eliminar un registro
 * 
*/
const deleteItem = async (req, res) => {

    try {
        req = matchedData(req);
        const { id } = req;
        //const data = await tracksModel.deleteOne({_id:id}); //Borrado fisico /hard--> si elimnina permanente el registo
        const data = await tracksModel.delete({_id:id}); //Delete soft /borrado suave o logico--> Elimina el registro  sin borrarlo de la BD solo lo oculta
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
    updateItem,
    deleteItem,
}