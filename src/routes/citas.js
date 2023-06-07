const { Router } = require("express");
const router = Router();

const mysqlconnection = require('../database');

router.get('/',(req,res)=>
{
    mysqlconnection.query('SELECT * FROM autires',(err, rows, fields)=>
    {
       if(!err)
       {
        res.json(rows);
       } else{
         console.log(err);       }
    });

});

router.post('/', (req, res) => {
  mysqlconnection.query('INSERT INTO autires SET ?', req.body, (error, result) => {
      if (error) throw error;
      res.status(201).send(`Usuario añadido ID: ${result.insertId}`);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('UPDATE autires SET ? WHERE id_usuario=?', [req.body, id], (error, result) => {
      if (error) throw error;
      res.send('Usuario Actualizado');
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('DELETE FROM autires WHERE id_usuario=?', id, (error, result) => {
      if (error) throw error;
      res.send('Usuario eliminado.');
  });
});
module.exports = router;