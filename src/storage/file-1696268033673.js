const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const StorageSchema = new mongoose.Schema(

    {
        url:{
            type: String,
        },
        fileName:{
            type: String,

        }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

StorageSchema.plugin(mongooseDelete, {overrrideMethods: 'all'});
module.exports = mongoose.model('storages', StorageSchema);