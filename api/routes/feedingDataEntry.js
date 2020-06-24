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
    console.log("fafsafsfd");
    var postData  = req.body;
    connection.query('INSERT INTO entries SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
  });

router.get('/', function (req, res) {
   console.log(req);
   connection.query('SELECT * from entries', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

module.exports = router;