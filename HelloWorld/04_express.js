var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('html'));

app.route('/login')
    .post(function (req, res) {
      res.send(req.body.name);
  }).get(function (req, res) {
      res.send(req.query.name);
  });

app.get('/json',function(req, res){

          var user = {};
          user.name = 'kevin';
          user.gender = false;
          user.age = 68;
          user.address = 'TAIPEI, TAIWAN';
          res.end(JSON.stringify(user));
  });

  app.get('/route/:name', function (req, res) {
    console.log(req.params.name);
  });

app.listen(3000);

console.log('Running');
