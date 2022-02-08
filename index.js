const express = require('express');
const path = require('path');

// setup boilerplate
let endpoint = ''
const app = express();

app.get('/', function(req, res) {
    // res.send("Ejemplo CI/CD sencillo usando NodeJs+Express desde la Clase Online");
    res.sendFile(path.join(__dirname + '/index.html')); // serve static html
})

const PORT = 8000;
app.listen(PORT,function() {
    console.log(`App listening on port ${PORT}`)
});
