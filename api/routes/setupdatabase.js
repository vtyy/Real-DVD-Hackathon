
var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   mysqllib.executeQuery('DROP TABLE IF EXISTS url').then(function(){
      mysqllib.executeQuery('CREATE TABLE url (urlid int NOT NULL AUTO_INCREMENT,originalurl varchar(255) NOT NULL,redirecturl varchar(255) NOT NULL UNIQUE,PRIMARY KEY(urlid))');
   })
   .then(function(){
      mysqllib.executeQuery('INSERT INTO url (originalurl, redirecturl) VALUES ("www.nushigh.edu.sg", "goodschool")');
   });
   res.send("completed setup")
});

module.exports = router;
