var express = require('express');
var router = express.Router();

/* GET documentation page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SimpleDex Documentation' });
});

module.exports = router;
