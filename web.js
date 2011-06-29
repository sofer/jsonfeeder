var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Nothing here yet');
});

app.get('/weighin', function(request, response) {
  response.send('there will be a weight here');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});