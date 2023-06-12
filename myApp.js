let express = require('express');
let app = express();

console.log("Hello World");

const sendPath = __dirname + '/views/index.html';
const staticPath = __dirname + '/public';

app.use('/public', express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(sendPath);
}) ;

 module.exports = app;
