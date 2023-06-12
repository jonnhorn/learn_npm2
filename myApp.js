let express = require('express');
let app = express();

console.log("Hello World");

/*
app.get('/', (req, res) => {
    res.send('Hello Express');
}) ;
*/

const sendPath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
    res.sendFile(sendPath);
}) ;

 module.exports = app;
