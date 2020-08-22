var express = require('express');
var mysqllib = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   mysqllib.executeQuery('SELECT urlid FROM url').then(function(result){
    res.send(result);
   });
});

module.exports = router;
