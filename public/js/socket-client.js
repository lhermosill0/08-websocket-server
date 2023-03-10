

//referencias del HTML
const lblon     = document.getElementById("lblon");
const lblof     =document.getElementById("lblof");
const txtMensaje=document.getElementById("txtMensaje")
const btnEnviar=document.getElementById("btnEnviar")
//cliente para el socket ,, llamese socket una pc. un sitio web etc
const socket =io();

//es un listener.
socket.on("connect", () => {
    // socket.rooms.size === 0
    console.log('Conectado')
    lblof.style.display='none'
    lblon.style.display=''
  });

  //es un listener.
socket.on("disconnect", () => {
    // socket.rooms.size === 0
    console.log('Desconectado')
    lblof.style.display=''
    lblon.style.display='none'
  });

  socket.on('enviar-mensaje',(payload)=>{
      console.log('Mensaje Recibido',payload)
  })

  btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMensaje.value;
    //enviar un mensaje al servidor
    const payload={
        mensaje,
        id:'123',
        fecha: Date.now()

    }
    socket.emit('enviar-mensaje',payload,(id)=>{
      console.log('mensaje desde el server', id)
    })

  })