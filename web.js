var http=require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var express = require('express');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
}).listen(9615);

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
