const socketController=(socket) => {
    // send a message to the client
         //console.log('Cliente Conectado', socket.id);

        socket.on('disconnecting', ()=>{
           // console.log(socket.rooms);
        });
        socket.on('disconnect', () => {
            // socket.rooms.size === 0
        });
        //escuchar mensaje del front end
        socket.on('enviar-mensaje', (payload,callback) => {
            //console.log('Recibo mensaje del cliente', payload);
            const id=12345
            callback(id)
            socket.broadcast.emit('enviar-mensaje' ,payload)
            //this.io.emit('enviar-mensaje' ,'Enviar msg desde el server',payload)
        });

    }

    module.exports={
        socketController
    }