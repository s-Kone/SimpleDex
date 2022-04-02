var fs = require('fs');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

/* GET documentation page. */
router.get('/', auth.authenticateToken, function(req, res, next) {
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
