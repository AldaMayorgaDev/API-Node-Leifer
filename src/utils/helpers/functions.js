const removeExtension =(fileName)=>{  
    /*
    * File name = tracks.js
    * Se realiza el split para que corte en el . 
    * regresa un arreglo con do elementos [track, js]
    * Con shift() se toma el primer elemento del arreglo
    * return 'track'
    */
    return fileName.split('.').shift()
}


module.exports = {removeExtension};