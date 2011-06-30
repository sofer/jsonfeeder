var express = require('express');
var http = require('http');
//var request = require('request');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Nothing here yet');
});

app.get('/weighin', function(request, response) {
  var wittings = 'http://wbsapi.withings.net/measure?action=getmeas&userid=197721&publickey=6bd401c98be7d073&limit=1&meastype=1';
  
  http.request({uri: wittings}, function (error, response, body) {
    response.send(body);
  });  

});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});

/*


var request = require('request'),
  url = require('url'),
  http = require('http');
  


  var server = http.createServer(function (request, response) {
    requestedUri = url.parse(request.url).pathname;
    requestedUri = requestedUri.substring(1);
    console.log("Got request for " +requestedUri);
    if (!requestedUri.match('^http')) {
      console.log("requested URI is not a valid URL!  Dropping request...");
      response.writeHead(400, {"Content-Type": "text/html"})
      response.end("Invalid url");
    } else {
      getPage(requestedUri, function(body) {
        response.writeHead(200, {"Content-Type": "text/html"}),
        response.write(body),
        response.end("ip2k.com NodeJS simple server demo")
      })
    }
  });


function getPage (someUri, callback) {
  request({uri: someUri}, function (error, response, body) {
      console.log("Fetched " +someUri+ " OK!");
      callback(body);
    });
}

var server = http.createServer(function (request, response) {
  requestedUri = url.parse(request.url).pathname;
  requestedUri = requestedUri.substring(1);
  console.log("Got request for " +requestedUri);
  if (!requestedUri.match('^http')) {
    console.log("requested URI is not a valid URL!  Dropping request...");
    response.writeHead(400, {"Content-Type": "text/html"})
    response.end("Invalid url");
  } else {
    getPage(requestedUri, function(body) {
      response.writeHead(200, {"Content-Type": "text/html"}),
      response.write(body),
      response.end("ip2k.com NodeJS simple server demo")
    })
  }
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/http://example.com");
console.log("To use, just append some URL as a request, like this: http://127.0.0.1:8000/http://example.com");










var request = http.request(options, function(response) {
  var body = '';
  response.on('data' function(chunk) {
    body += chunk;
  })
});  
request.end()


http.get(opt, function(resp) {
  var content = '';
  resp.on('data', function (chunk) {
    content += chunk;
  });
  resp.on('end', function() {
    if (resp.statusCode == '200') {

    } else {

    }
    if (that.pagesToGo == 0) {
      console.log('No more pages left. Converting now.')
      that.convert();
    }
  });
  
*/
