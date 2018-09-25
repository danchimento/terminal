var express = require('./node_modules/express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static('dist'))

app.listen(port);