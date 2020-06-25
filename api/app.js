var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedingDataRouter = require('./routes/feedingDataEntry');

var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedingDataEntry', feedingDataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//creating mySQL connection, and creating new local db/table if they do not exist
//assumes root password is 'password' 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("CREATE DATABASE IF NOT EXISTS duckDataDb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  connection.query("USE duckDataDb");
  var query = "CREATE TABLE IF NOT EXISTS Entries ( feedingTime varchar(255), foodType varchar(255), feedingLocation varchar(255), numberOfDucks varchar(255), quantityOfFood varchar(255))"
  connection.query(query, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
module.exports = app;
