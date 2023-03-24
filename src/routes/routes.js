const { Router } = require("express");
const router = Router(); //Inciamos y guardamos

router.get('/', (req, res)=>{
    res.json({"Title": "Hello World"});
}); // envia un json

router.get('/creador', (req, res)=>{
    const data=
    {
        "name": "André",
        "website": "andreonlyfans.com"
    };
    res.json(data);
}); // envia un json en forma de variable

module.exports = router;