var express = require('express');
var fileReader = require('fs');
var app = express.createServer(express.logger());


//var stringOutput = fs.readFileSync('index.html','ascii');
//var stringOutput = '';
fs.readFileSync('./index.html', function(err, data){
    if (err) throw err;
    console.log(data);
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
