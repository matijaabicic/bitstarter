var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


//var stringOutput = fs.readFileSync('index.html','ascii');
var stringOutput = '';
fs.readFileSync('./index.html', 'utf8', function(err, data){
    if (err) throw err;
    stringOutput = data.toString('utf8');
//console.log(data);
}
var stringOutput= 'Helo World2!';

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.send(stringOutput);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
