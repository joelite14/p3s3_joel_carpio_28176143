const mysql = require ('mysql');

//Conexion constante

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'programacion3'
})

//Conexion error caso dado
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error)
        return
    }
    console.log('¡Conectado a la Base de datos MySQL!');
})

//Exportar conexion
module.exports = conexion;