var express = require('express');
var router = express.Router();

/* GET pokemon */
router.get('/', function(req, res, next) {
  let pokemon = {"pokemon": "bulbasaur"};
  res.type('json');
  res.send(pokemon);
});

module.exports = router;
