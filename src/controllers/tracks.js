/**
 * El controlador va a ser la parte en la que se va a contener la lógica de la aplicación
 *  
 */ 

const {tracksModel} = require('../models');
/**
 * Obtener lista de la BD
 * 
*/ 
const getItems =async (req, res)=>{

    const data = await tracksModel.find({})
    res.send({
        data: data
    });
};


/**
 * Obtener un elemento
 * 
*/ 
const getItem =(req, res)=>{

};


/**
 * Insertar un regristro
 * 
*/ 
const createItem = async(req, res)=>{
    const {body}= req;
    console.log("🚀 ~ createItem ~ body:", body);
    const data = await tracksModel.create(body)
    res.send({
        data:data
    })
};


/**
 * Actualizar un registro
 * 
*/ 
const updateItem =(req, res)=>{

};


/**
 * Eliminar un registro
 * 
*/ 
const deleteItem =(req, res)=>{

};



module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
}