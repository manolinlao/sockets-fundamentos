const { io}   = require('../server')

io.on('connection',(client)=>{
    console.log('Usuario conectado');

    // Emito mensaje al cliente
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Para detectar desconexiones del cliente con el servidor
    client.on('disconnect',()=>{
        console.log('usuario desconectado')
    });

    // Escuchar al cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);

        client.broadcast.emit('enviaMensaje',data);

        /*
        if(data.usuario){
            callback({
                respuesta: 'TODO SALIO BIEN'
            });
        }else{
            callback({
                respuesta: 'TODO SALIO MAL'
            });
        }
        */

    });
}); 