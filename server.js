var http = require('http');
var path = require('path');
var express = require('express');
var server = require('./app/configs/server.conf')
var app = express();

app.set('port', server.host || server.port);
app.set('views',path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(__dirname + 'app/views'));

app.get('/', function (req, res) {
    /*res.render('index', { W

    })
    */
    res.sendFile(__dirname + '/app/views/index.html');
})

app.get('/*', function (req, res) {
    res.render('404', { 

    })
})


http.createServer(app).listen(server.port, server.host, () => {
    console.log(`Server running at http://${server.host}:${server.port}/`);
});