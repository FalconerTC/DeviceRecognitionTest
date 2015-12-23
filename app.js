var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js-sha1', express.static(__dirname + '/node_modules/js-sha1/build/'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    var OS = req.body.hash;
    console.log(OS);
    var ip = req.ip;
    console.log('User connected: %s', ip);
    //return res.json({a: "a"}, 200);
    res.end("Words");
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
