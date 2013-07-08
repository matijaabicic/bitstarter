var express = require('express');
var fileReader = require('fs');
var app = express.createServer(express.logger());

//app.configure(function(){
//  app.set('port', process.env.PORT || 5000);  
//  app.set("view options", {layout: false});  //This one does the trick for rendering static html
//  app.engine('html', require('ejs').renderFile); 
//  app.use(app.router);
//
//});

var indexHTMLBuffer = new Buffer(fs.readFile('index.html'));
var stringOutput = indexHTMLBuffer.toString('ascii',0);

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.send(stringOutput);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
