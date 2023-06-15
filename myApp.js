require('dotenv').config();

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

console.log("Hello World");
console.log("MESSAGE_STYLE: " + process.env.MESSAGE_STYLE);

const sendPath = __dirname + '/views/index.html';
const staticPath = __dirname + '/public';
let msg_json = 'Hello json';

app.use('/public', express.static(staticPath));

app.use(bodyParser.urlencoded({extended: false}));

// log the incoming requests
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})

//return the curr time for path /now
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
   res.json({ "time": req.time });
});

// echo based on path
app.get('/:word/echo', function(req, res, next) {
    res.json({'echo': req.params.word })
})

// return URL params 
app.get('/name', function(req, res, next) {
    res.json({ 'name': req.query.first + ' ' + req.query.last });
})

// return body content
app.post('/name', function(req,res,next) {
    res.json({ 'name': req.body.first + ' ' + req.body.last });
})

// use an ENV variable to modify response
app.get('/json', (req, res) => {
    console.log("MESSAGE_STYLE: " + process.env.MESSAGE_STYLE);
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json( { "message": "Hello json".toUpperCase() });
    }
    else {
        res.json( { "message": "Hello json" });
    }
    
})

// respond to root GET
app.get('/', (req, res) => {
    res.sendFile(sendPath);
}) ;

 module.exports = app;
