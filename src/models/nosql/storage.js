const mongoose = require('mongoose');


const StorageSchema = mongoose.Schema(

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

module.exports = mongoose.model('storages', StorageSchema);