var express = require('express');
var bodyParser = require('body-parser');
var sha1 = require('js-sha1')
var app = express();

var registeredDevices = [];

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    var id = req.body.id;
    var hash = sha1(req.ip + id);

    var deviceVal = 0;
    /* Check if device is registered */
    registeredDevices.forEach(function(elem) {
	if (elem.id === hash)
          deviceVal = (++elem.count);
    });

    if (deviceVal <= 0) {
	var device = {id: hash, count: 1};
	var index = registeredDevices.push(device);
	console.log("Added device number: "+ (index + 1) + " id: "+hash);
    }

    var response = (deviceVal > 0 ? "Access count: " + deviceVal : "New device added!");
    res.end(response);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
