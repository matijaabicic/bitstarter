var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
app.use(express.static(__dirname));
//console.log("declared variables");
var stringOutput = "";
function readContent(callback) {
    fs.readFile("./index.html", function (err, content) {
        if (err) return callback(err)
        callback(content)
    })
}

readContent(function (content) {
    stringOutput = content.toString();
})

app.get('/', function(request, response) {
 // response.send('Hello World2!');
 //console.log(request);
    response.send(stringOutput);
});

var port = process.env.PORT || 5000;
app.listen(port, function() 
	{
	  console.log("Listening on " + port);
	}
);
