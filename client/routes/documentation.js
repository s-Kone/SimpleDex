var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('documentation', { title: 'Simpledex Documentation' });

});

module.exports = router;
