var http = require('http')
var fs = require('fs');

fs.readFile('./uploads/1.png', function(err, data) {
  if (err) throw err; // Fail if the file can't be read.
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(data); // Send the file data to the browser.
  }).listen(3000);
  console.log('Server running at http://localhost:8124/');
});
