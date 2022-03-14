var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET documentation page. */
router.get('/', function(req, res, next) {
  fs.readFile('./swagger.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.type('json');
      res.send("{status: error}");
      return;
    }
    res.type('json');
    res.send(data);
  })
});

module.exports = router;
