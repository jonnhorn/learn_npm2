require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");
console.log("MESSAGE_STYLE: " + process.env.MESSAGE_STYLE);

const sendPath = __dirname + '/views/index.html';
const staticPath = __dirname + '/public';
let msg_json = 'Hello json';

app.use('/public', express.static(staticPath));

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})

app.get('/json', (req, res) => {
    console.log("MESSAGE_STYLE: " + process.env.MESSAGE_STYLE);
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json( { "message": "Hello json".toUpperCase() });
    }
    else {
        res.json( { "message": "Hello json" });
    }
    
})

app.get('/', (req, res) => {
    res.sendFile(sendPath);
}) ;

 module.exports = app;
