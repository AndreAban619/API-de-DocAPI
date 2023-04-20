const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'viodatcadb'

});

mysqlconnection.connect(function(err){
    if(err)
    {
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada');
    }
}); //Se conecta a la base

module.exports = mysqlconnection;