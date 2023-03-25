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

router.post('/', (req, res) => {
  mysqlconnection.query('INSERT INTO usuarios SET ?', req.body, (error, result) => {
      if (error) throw error;
      res.status(201).send(`Usuario añadido ID: ${result.insertId}`);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('UPDATE usuarios SET ? WHERE id_usuario=?', [req.body, id], (error, result) => {
      if (error) throw error;
      res.send('Usuario Actualizado');
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('DELETE FROM usuarios WHERE id_usuario=?', id, (error, result) => {
      if (error) throw error;
      res.send('Usuario eliminado.');
  });
});
module.exports = router;