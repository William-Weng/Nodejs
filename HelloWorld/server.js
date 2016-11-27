var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var q = require('./dblink.js').query;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('html'));



app.post('/springs',function(req, res){

		q("select * from SPRINGS where admArea='"+req.body.city+"'",function(error, rows){
			if (error) {
				res.end('ERROR');
			} else {
				res.end(JSON.stringify(rows));
			}
		})

});


app.get('/something',function(req, res){

        var user = {};
        user.name = 'kevin';
        user.gender = false;
        user.age = 68;
        user.address = 'TAIPEI, TAIWAN';
        res.end(JSON.stringify(user));
});

app.get('/anything',function(req, res){

        res.end('Please fight tiger tonight.');
});

app.post('/login',function(req, res){

		if (req.body.username == 'david') {
			if	(req.body.password == '1234') {
				res.end(JSON.stringify({status:true, msg:'正常'}));
			} else {
				res.end(JSON.stringify({status:false, msg:'密碼錯誤, 請重新輸入!'}));
			}
			
			
		} else {
			res.end(JSON.stringify({status:false, msg:'這個帳號不存在, 請重新註冊!'}));
		}
        
});

var httpServer = http.createServer(app);

httpServer.listen(5009);
