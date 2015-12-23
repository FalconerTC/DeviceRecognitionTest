var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    //res.send('Hi');
    res.sendFile(__dirname + "/index.html");

    var ip = req.ip;
    console.log('User connected: %s', ip);
});

app.post("/", function(req, res) {
    var OS = req.body.OS;
    console.log(OS);
    //return res.json({a: "a"}, 200);
    res.end("Words");
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
