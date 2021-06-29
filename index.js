const express = require('express');

const app = express();

//Rotas

app.get('/', (req, res) => {
    console.log("server started");

    return res.send("Server 1");
});

app.get('/pagina2', (req, res) => {

    return res.send("Rote 2 = Pag 2");
});

app.listen(2781);