var express = require('express');
var app = express();

app.use('/scripts', express.static(__dirname + '/node_modules/clientjs/dist/'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    //res.send('Hi');
    res.sendFile(__dirname + "/index.html");
    //res.render('index.html');

    var ip = req.ip;
    console.log('User connected: %s', ip);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
