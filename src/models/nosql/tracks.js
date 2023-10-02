const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksSchema = new mongoose.Schema(

    {
        name: {
            type: String,
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
/** 
 * Implementar metodo propio con relacion a storage
 * */

TracksSchema.statics.findAllData = function () {
    const joinData = this.aggregate([ //Estando en el modelo Tracks
        {
            $lookup: {
                from: 'storages', //Se hace una relacion con el modelo Storages
                localField: 'mediaId',  //Donde en el modelo padre utilizas el campo tracks.mediId
                foreignField: '_id', //Se relacion con Storages._id
                as: 'audio' //el resultado que consiga lo colca en un campo alias llamado audio
            }
        },
        {
            $unwind: '$audio',

        }
    ])
    return joinData
};

TracksSchema.statics.findOneData = function (id) {
    const joinData = this.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id),
            },
        }, //Estando en el modelo Tracks
        {
            $lookup: {
                from: 'storages', //Se hace una relacion con el modelo Storages
                localField: 'mediaId',  //Donde en el modelo padre utilizas el campo tracks.mediId
                foreignField: '_id', //Se relacion con Storages._id
                as: 'audio' //el resultado que consiga lo colca en un campo alias llamado audio
            }
        },
        {
            $unwind: '$audio',

        }

    ]);
    return joinData;
};

TracksSchema.plugin(mongooseDelete, { overrideMethods: 'all' }); //añadiendo plugin del paquete mongoose-delete
module.exports = mongoose.model("Tracks", TracksSchema);