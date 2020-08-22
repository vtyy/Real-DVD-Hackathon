var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // returns 1 on successfully insertation, else 0
  // original is original url
  // alias is alias
  // if private = 1, then it is private, else private
  // tag is based on the 


  var original = req.query.original;
  var alias = req.query.alias;
  var private = req.query.private;
  var tag1 = req.query.tag1;
  var tag2 = req.query.tag2;
  
  query_string = "SELECT originalurl FROM url WHERE redirecturl = " + mysql.escape(alias);
  mysqllib.executeQuery(query_string).then(function(result){
        if (result.length > 0){
        res.send(result[0].originalurl);
        } else {
        res.send("invalid url");
        }
    });


});

module.exports = router;
