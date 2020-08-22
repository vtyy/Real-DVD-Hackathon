
var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   mysqllib.executeQuery('DROP TABLE IF EXISTS url')
   .then(function(){
      mysqllib.executeQuery('CREATE TABLE url (urlid int NOT NULL AUTO_INCREMENT, originalurl varchar(255) NOT NULL, redirecturl varchar(255) NOT NULL UNIQUE, privateurl int(1) NOT NULL, tag varchar(255) NOT NULL, likes int NOT NULL,PRIMARY KEY(urlid))');
   })
   .then(function(){
      mysqllib.executeQuery('INSERT INTO url (originalurl, redirecturl, privateurl, tag, likes) VALUES ("http://www.nushigh.edu.sg", "goodschool", 1, "Science", 1000)');
   })
   .then(function(){
      mysqllib.executeQuery('INSERT INTO url (originalurl, redirecturl, privateurl, tag, likes) VALUES ("https://www.gov.sg", "government", 0, "Others", 0)');
   })
   .then (function (){
      mysqllib.executeQuery('INSERT INTO url (originalurl, redirecturl, privateurl, tag, likes) VALUES ("http://www.reddit.com", "goodmemes", 0, "Others", 1337)');
   })
   .then (function() {
      mysqllib.executeQuery('INSERT INTO url (originalurl, redirecturl, privateurl, tag, likes) VALUES ("https://www.mymoneysense.gov.sg/covid-19/expense-manager", "financeplanner", 0, "Productivity", 0)');
   });
   res.send("completed setup")
});

module.exports = router;
