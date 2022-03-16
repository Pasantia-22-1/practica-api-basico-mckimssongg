const express = require('express'); //Importar express
const cors = require('cors'); //Importar cors
const router = require('./routes/task.route.js'); //Importar router

class Serve{
    constructor(port){
        this.port = port; // puerto a usar 
        this.api = express(); //instaciando express
        this.initRouter(); //
    }
    initServer(){ //Metodo para inicalizar el server
        this.api.listen(this.port, () =>{console.log("iniciando server")}); 
    }
    initRouter(){//Metodo para las rutas
        this.api.use('/api/v1',router); //le pasamos el router //(req, res) =>{ //la petición a recibir de la ruta
            // res.json({message:'Hello Word'}); //respuesta de la petición
    } 
}
module.exports = Serve