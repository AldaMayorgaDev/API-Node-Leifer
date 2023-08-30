const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);

    },
    filename: function(req, file, cb){
        //obtener extension del archivo
        const extension = file.originalname.split('.').pop()

        //Devuelve un nombre de archivo normalizado --> file2023012323.extension
        const filename= `file-${Date.now()}.${extension}`;

        //asgina el nombre nomralizado al archivo
        cb(null, filename);
    }
});

const uploadMiddleware = multer({
    storage: storage
});


module.exports={uploadMiddleware};