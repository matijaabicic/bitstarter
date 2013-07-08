var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
  app.set('port', process.env.PORT || 5000);  
  app.set("view options", {layout: false});  //This one does the trick for rendering static html
  app.engine('html', require('ejs').renderFile); 
  app.use(app.router);

});

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
