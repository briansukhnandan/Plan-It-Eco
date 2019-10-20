var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/page_structure/index.html'));
});

router.get('/info', function(req, res, next) {

  res.sendFile(path.join(__dirname + '/page_structure/info.html'));

});

router.get('/create', function(req, res, next) {

  res.sendFile(path.join(__dirname + '/page_structure/create.html'));

});

module.exports = router;
