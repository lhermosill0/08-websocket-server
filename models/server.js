const express = require('express')
var cors = require('cors');
const { socketController } = require('../sockets/controllers');
require('dotenv').config()
class  Server  {
 constructor(){
   
     //se definie la rutas
    this.paths={}
    

    this.app    = express();
    this.PORT   =process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io     = require('socket.io')(this.server);
    //rutas de mi aplicación
    this.middlewares();
    this.routes();
    this.sockets();
 }
 
 middlewares(){

   //midelware del cors 
    this.app.use(cors())

    //direcctorio público
    this.app.use(express.static('public'))


 }
 routes(){
  
 }
 sockets(){

    this.io.on('connection', socketController)
 }
 listen(){
    this.server.listen(this.PORT, ()=>{
        console.log('proceso corriendo en  puerto ',this.PORT)
    }) 
 }
}
module.exports =Server;
