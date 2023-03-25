const { Router } = require("express");
const router = Router();

const mysqlconnection = require('../database');

router.get('/',(req,res)=>
{
    mysqlconnection.query('SELECT * FROM usuarios',(err, rows, fields)=>
    {
       if(!err)
       {
        res.json(rows);
       } else{
         console.log(err);
       }
    });

});
module.exports = router;