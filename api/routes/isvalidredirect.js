var express = require('express');
var mysqllib = require('../db');
var mysql = require('mysql');
var router = express.Router();

// alias must be alphanumeric
// returns 1 if the alias can be used, else 0

/* GET home page. */
router.get('/', function(req, res, next) {
    var alias = req.query.alias;
    if (alias.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)){ // check if alias is alphanumeric
        var query_string = "SELECT originalurl FROM url WHERE redirecturl = " + mysql.escape(alias);
        mysqllib.executeQuery(query_string).then(function(result){
        if (result.length > 0){
        res.send("0");
        } else {
            res.send("1");
        }
        });
    } else {
        res.send("0");
    }
});


module.exports = router;
