const express = require('express');

const app = express();

app.use('/users', (req, res, next) =>{
    res.send("<h1>USERRRRSSSSSSSSSSSs</h1>");

    console.log('USUARIOOOS');
    res.end();
});

app.use('/', (req, res, next) =>{
    res.send("<h1>Klk Main pagee</h1>");

    console.log('olis');
    res.end();
});

app.listen(3000);