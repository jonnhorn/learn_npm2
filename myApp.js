require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");
console.log("MESSAGE_STYLE: " + process.env.MESSAGE_STYLE);

const sendPath = __dirname + '/views/index.html';
const staticPath = __dirname + '/public';
let msg_json = 'Hello json';

app.use('/public', express.static(staticPath));

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') msg_json = msg_json.toUpperCase();
    res.json( { "message": msg_json });
})

app.get('/', (req, res) => {
    res.sendFile(sendPath);
}) ;

 module.exports = app;
