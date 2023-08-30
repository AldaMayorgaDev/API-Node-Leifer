const {storageModel}= require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItem= async(req, res)=>{

};


const getItems= async(req, res)=>{
    const data = await storageModel.find({})
    res.send({
        data: data
    });
};


const createItem = async(req, res)=>{
    const {body, file}= req;
    console.log("🚀 ~ createItem ~ file:", file)
    console.log("🚀 ~ createItem ~ body:", body);
    

    const {filename} = file;
    const fileData ={
        fileName: filename,
        url: `${PUBLIC_URL}/${filename}`
    }

    const data = await storageModel.create(fileData)
    res.send({
        data
    })

};

const updateItem= async(req, res)=>{

};

const deleteItem= async(req, res)=>{

};


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
}