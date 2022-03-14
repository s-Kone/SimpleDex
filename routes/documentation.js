var express = require('express');
var router = express.Router();

/* GET documentation page. */
router.get('/', function(req, res, next) {
  res.render('documentation', { title: 'SimpleDex Documentation' });
});

module.exports = router;
