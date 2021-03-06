var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var validUrl = require('valid-url');
var router = express.Router();

function checkvalid(tag){
  return true;
}

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
  var tag = req.query.tag;

  //error checking
  if(alias && original && private && tag){
    if ((alias.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) && validUrl.isUri(original) && (private === "1" || private === "0") && checkvalid(tag)){ // check if alias is alphanumeric and url is valid
      //check if alias is not in database
        mysqllib.executeQuery("SELECT originalurl FROM url WHERE redirecturl = " + mysql.escape(alias)).then(function(result){
        if (result.length == 0){
          query_string = "INSERT INTO url (originalurl, redirecturl, privateurl, tag, likes) VALUES (" + mysql.escape(original) + ", " + mysql.escape(alias) + ", " + mysql.escape(private) + ", " + mysql.escape(tag)+ ", " + " 0 " + ")"
          mysqllib.executeQuery(query_string).then(function(){
              res.send('1');
          });
        } else {
          res.send('0');
        }
      });
    } else {
      res.send('0');
    }
  } else {
    res.send('0');
  }


});

module.exports = router;
