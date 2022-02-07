const express = require('express');

// setup boilerplate
const app = express();
let endpoint = ''

app.get('/', (req, res) {
    res.send("Ejemplo CI/CD sencillo usando NodeJs+Express desde la Clase Onlinel");
});

const PORT = process.evn.PORT || 5000;
app.listen(PORT,function() {
    console.log(`App listening on port ${PORT}`)
});