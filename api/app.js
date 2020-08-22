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
var isValidOriginalRouter = require('./routes/isvalidoriginal');
var isValidDirectRouter = require('./routes/isvalidredirect');
var setUrlRouter = require('./routes/seturl');
var getRedirectRouter = require('./routes/getredirect');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mysqllib.executeQuery('DROP TABLE IF EXISTS url');
//mysqllib.executeQuery('CREATE TABLE url (urlid int NOT NULL AUTO_INCREMENT,originalurl varchar(255) NOT NULL,redirecturl varchar(255) NOT NULL UNIQUE,PRIMARY KEY(urlid))');
//mysqllib.executeQuery('INSERT INTO url (originalurl,redirecturl) VALUES ("www.nushigh.edu.sg", "goodschool")');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/output', outputRouter);
app.use('/getallpublic', getAllPublicRouter);
app.use('/isvalidoriginal', isValidOriginalRouter);
app.use('/isvalidredirect', isValidDirectRouter);
app.use('/seturl', setUrlRouter);
app.use('/getredirect', getRedirectRouter);

// catch general cases
app.use(function(req, res, next) {
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
