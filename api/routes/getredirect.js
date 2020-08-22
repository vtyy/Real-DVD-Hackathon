var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var alias = req.query.alias;
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
