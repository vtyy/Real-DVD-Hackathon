var createError = require('http-errors');
var express = require('express');
const url = require('url'); 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var outputRouter = require('./routes/output');
var getAllPublicRouter = require('./routes/getallpublic');
var isValidRouter = require('./routes/isvalid');
var setUrlRouter = require('./routes/seturl');
var db = require('./db');
var app = express();

// mysql connection


db.query('DROP TABLE IF EXISTS url');
db.query('CREATE TABLE url (urlid int NOT NULL AUTO_INCREMENT,originalurl varchar(2000) NOT NULL,redirecturl varchar(2000) NOT NULL,PRIMARY KEY(urlid))')
db.query('INSERT INTO url (originalurl,redirecturl) VALUES ("www.nushigh.edu.sg", "goodschool")');


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
app.use('/output', outputRouter);
app.use('/getallpublic', getAllPublicRouter);
app.use('/isvalid', isValidRouter);
app.use('/seturl', setUrlRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var query_string = url.parse(req.url).pathname.toString().substring(1, url.parse(req.url).pathname.length);
  db.query("SELECT originalurl FROM url WHERE redirecturl = ?",[
    query_string
  ],function(err, result){
    if (err) throw err;
    if (result.length > 0){
      res.send(result[0].originalurl);
    } else {
      res.send("Invalid url");
    }
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
