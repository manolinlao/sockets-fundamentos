var socket = io(); //io aparece porque está en la librería socket.io.js

// defino mi primera función, una función que me diga cuando estoy conectado con el servidor
socket.on('connect',function(){
    console.log(`Conectado al servidor`);
})
 //ahora ya nuetro código del front end va a estar pendiente de los cambios en el servidor
//si paro el servidor veré mensajes de error durante un tiempo

// para escuchar desconexiones con el servidor
 socket.on('disconnect',function(){
    console.log('Perdimos conexion con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Manuel',
    mensaje: 'Hola mundo'
}, function( respuesta ){
     console.log('respuesta server:' + JSON.stringify(respuesta));
});

// Escuchar información
 socket.on('enviarMensaje', function(mensaje){
    console.log('De Servidor', mensaje);
});
