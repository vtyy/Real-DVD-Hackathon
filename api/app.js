var createError = require('http-errors');
var express = require('express');
const url = require('url'); 
const mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var getAllPublicRouter = require('./routes/getallpublic');
var isValidRouter = require('./routes/isvalid');
var setUrlRouter = require('./routes/seturl');
var app = express();

// mysql connection

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "admin",
  database: 'nushlink'
})

con.connect(function (err){
  if (err) throw err;
  console.log("Connected!");
});
con.query('CREATE TABLE IF NOT EXISTS `url` (`urlid` int NOT NULL AUTO_INCREMENT,`originalurl` varchar(2000) NOT NULL,`redirecturl` varchar(2000) NOT NULL,PRIMARY KEY(`urlid`))')
con.query('C')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/getallpublic', getAllPublicRouter);
app.use('/isvalid', isValidRouter);
app.use('/seturl', setUrlRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("checking if database have the url");
  var query_string = url.parse(req.url).pathname.toString().substring(1, url.parse(req.url).pathname.length);
  con.query("SELECT originalurl FROM url WHERE redirecturl = ?",[
    query_string
  ],function(err, result){
    if (err) throw err;
    console.log("Result: " + result);
  });
  next();
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

module.exports = app;
