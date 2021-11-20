var path = require('path');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/users');
var http = require('http');
var path = require('path');
var auth = require('./upfa')
const data = require('./public/javascripts/data');

var app = express();
const host = '192.168.55.133';
const port = 3000;
app.set('port', host || 3000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'web'));
//app.set('view engine', 'jade');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'web')));

//routes ejs
app.get('/',(req,res)=>{
    res.render('index.ejs');
})

// routes html/html file
app.get('/home',(req,res)=>res.end(`<html><body>Hlo boy</body></html>`))

// dinamic routes
app.get('/echo/:name',(req,res)=>{
    var name = req.params.name
    res.send(`hello ${name}`)
})

// letakkan /* di paling bawah untuk route yang tidak ditemukan
app.get('/*',(req,res)=>{
    res.status(404)
    res.end(`Not found`)
})

http.createServer(app).listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});