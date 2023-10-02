//Cambio de modelos de acuerdo a EngineDB

const ENGINE_DB = process.env.ENGINE_DB;
const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql';

const models = {

    usersModel: require(`${pathModels}/users`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`),
};


module.exports = models;