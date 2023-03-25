const { Router } = require("express");
const router = Router();

const mysqlconnection = require('../database');

router.get('/',(req,res)=>
{
    mysqlconnection.query('SELECT * FROM tokens2',(err, rows, fields)=>
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
  mysqlconnection.query('INSERT INTO tokens2 SET ?', req.body, (error, result) => {
      if (error) throw error;
      res.status(201).send(`Información añadida ID: ${result.insertId}`);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('UPDATE tokens2 SET ? WHERE id_usuario=?', [req.body, id], (error, result) => {
      if (error) throw error;
      res.send('Usuario Actualizado');
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlconnection.query('DELETE FROM tokens2 WHERE id_usuario=?', id, (error, result) => {
      if (error) throw error;
      res.send('Usuario eliminado.');
  });
});

module.exports = router;