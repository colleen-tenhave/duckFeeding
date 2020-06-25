var mysql = require('mysql');
var express = require('express');
var router = express.Router();


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "duckDataDb"
});    

router.post('/', function(req, res) {
    var postData  = req.body;
    //insert new entry into db
    connection.query('INSERT INTO entries SET ?', postData, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
  });

router.get('/', function (req, res) {
   connection.query('SELECT * from entries', function (error, results) {
    if (error) throw error;
    //send all rows from entries table
	  res.end(JSON.stringify(results));
	});
});

module.exports = router;