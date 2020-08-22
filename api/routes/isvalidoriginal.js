var express = require('express');
var validUrl = require('valid-url');
var router = express.Router();

// 1 represents valid url, 0 means not valid

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = req.query.url;
  if (validUrl.isUri(url)){
    res.send('1');
  } else {
    res.send('0');
  }
});

module.exports = router;
