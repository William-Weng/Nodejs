var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '10.211.55.6',
    user: 'root',
    password: '19790609',
    database:'myCard',
    port: 3306
});

var queryString1 = 'select * from main';
var queryString2 = 'SELECT 1 + 1 AS solution';

conn.connect();

conn.query(queryString1, function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].name);
});

conn.end();
