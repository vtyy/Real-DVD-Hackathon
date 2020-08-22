var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('O.O quite cool right', { title: 'NUSH LINK API' });
});

module.exports = router;
