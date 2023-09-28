const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


//Schema es la estructura

const UserSchema = new mongoose.Schema(
    {
        //strucutra del objeto
        name:{
            type: String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique: true
        },
        password:{
            type: String,
            select: false //No se muestra con la respuesta a la peticion
        },
        role:{
            type:["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true,   //este campo lo uqe va a hacer es que nos va a registrar  createAt, y UpdateAt  
        versionKey: false
    }
);

UserSchema.plugin(mongooseDelete, {overrideMethods: 'all'}); //añadiendo plugin del paquete mongoose-delete

/* module.exports = mongoose.model("nombreDeLaTablaSQL/NombreColeccionNOSQL", UserSchema) */
module.exports = mongoose.model("users", UserSchema)