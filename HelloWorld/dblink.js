var mysql = require('mysql');
var pool = mysql.createPool({
	user: 'student',
	password: 'student',
	host: 'localhost',
	port: '3306',
	database: 'LCCTEST',
	waitForConnections : true,
	connectionLimit: 10
});

exports.query = function(sql, fn){
	pool.getConnection(function(err, connection){
		connection.query(sql, function(error, rows){
			connection.release();
			return fn(error, rows);
		});
	});
};