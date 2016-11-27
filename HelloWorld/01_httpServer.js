var http = require('http');
var server = http.createServer(function (requset, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('Hello\n');
});

server.listen(12345);

console.log('localhost:12345');
