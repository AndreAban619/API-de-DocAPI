//npm init --yes , creación del packet json para describir el proyecto
// npm i express morgan, crear servidor, express:framework que nos permite crear codigo de servidor facil, morgan:modulo para ver las peticiones por consola
//npm i nodemon -D, reinicia el servidor por mi
//npm run dev para correrlo, creamos el comadon dev en el package.json, antes ejecutabamos con node src/index.js 
//npm i underscore para eliminar, recorres arreglos
//npm i node-fetch para hacer peticiones a urls (npm install node-fetch@2.6.1)actual
//ANDRÉ VICENTE CANUL ABÁN
//npm install mysql para base de datos
const express = require('express');
const app = express(); //ejecuto express
const morgan = require('morgan'); //morgan procesa los datos antes de que el servidor lo reciba -D es que no depende del proyecto, si no, del desarollo

//configuraciones
app.set('port', 3000 || process.env.PORT); // como si fuera variable, se envia port con el dato 3000, se hace global y se puede obtener más facil, en caso de que se ocupe el 3000, se usa un puerto libre
app.set('json spaces', 2); //ordena con espacios de 2

//middlewares
app.use(morgan('dev')); //me permite ver lo que va llegando al servidor osea las peticiones
app.use(express.urlencoded({extended: false}));//tratar de entender los datos de los formularios
app.use(express.json()); //recibir y entender los formatos json

//Rutas, routes

app.use('/api/citas',require('./routes/citas'));
//empezando servidor-
app.listen(app.get('port'),() =>{ // mi aplicación escucha en el puerto 3000 y despues despliega un msj de ubicación
    console.log(`Server en el puerto ${app.get('port')}`);
});