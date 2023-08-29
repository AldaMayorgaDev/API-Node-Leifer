const mongoose = require('mongoose');


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
            type: String
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

/* module.exports = mongoose.model("nombreDeLaTablaSQL/NombreColeccionNOSQL", UserSchema) */
module.exports = mongoose.model("users", UserSchema)