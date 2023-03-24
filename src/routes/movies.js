const { Router } = require("express");
const router = Router();
const movies = require('../ejemplo.json'); //oobtengo los datos y los guardo en una variable
const _ = require('underscore');

//console.log(movies);

router.get('/',(req,res)=>
{
    res.json(movies);

});

router.post('/', (req, res)=> //metodo post para almacenar recibe algo de la pagina y responde
{
    //console.log(req.body);
    const {titulo, director, anio, rating}=req.body; //obtengo los datos
    if(titulo && director && anio && rating){ // compruebo si están
        const id = movies.length + 1;
        const newMovie = {...req.body,id };
        console.log(newMovie);
        movies.push(newMovie);// aqui lo guardo
        res.json(movies); //envio movies actualizado todo en memoria, no local
        //res.json('guardado'); // los guardo
    }else{
       // res.send('no se guardo');
        res.status(500).json({Error: "este es el error."});
    }
    res.send('recibido');
});

router.delete('/:id',(req, res)=>
{
    const { id } = req.params;
    _.each(movies, (movie, i)=> // recorro el arreglo de peliculas, obtengo una pelicula con su id
    {
       if(movie.id == id) // si reccoro el arrelgo en la posición de la pelicula y este es igual al que recibo
       {
         movies.splice(i,1); // eliminala
       }
    });
  //console.log(req.params);
  res.send(movies); // envia el arreglo actualizado
  //res.send('Eliminado');
});

router.put('/:id',(req, res)=>
{
    const { id } = req.params;
    const {titulo, director, anio, rating}=req.body; //obtengo los datos
    if(titulo && director && anio && rating){
        _.each(movies, (movie, i)=> // recorro el arreglo de peliculas, obtengo una pelicula con su id
        {
           if(movie.id == id) // si reccoro el arrelgo en la posición de la pelicula y este es igual al que recibo
           movie.titulo= titulo; //actualizalo con lo que recibo
           movie.director= director;
           movie.anio= anio;
           movie.rating= rating;

        });
    res.json(movies);
    } else
    {
        res.status(500).json({Error: "No se actualizo"});
    }
});
module.exports = router;