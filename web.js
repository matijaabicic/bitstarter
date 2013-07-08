var express = require('express');
var fileReader = require('fs');
var app = express.createServer(express.logger());


//var indexHTMLBuffer = new Buffer(fs.readFile('index.html'));

var stringOutput = fs.readFileSync('index.html','ascii');

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.send(stringOutput);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
