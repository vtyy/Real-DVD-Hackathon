var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  query_string = "SELECT redirecturl, originalurl FROM url WHERE privateurl = 0 ";
  mysqllib.executeQuery(query_string).then(function(result){
    res.json(result);
  });
});

module.exports = router;
