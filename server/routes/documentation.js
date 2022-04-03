var fs = require('fs');
var Router = require('express-promise-router');
var auth = require('../modules/auth');
var admin_stats = require('../modules/admin_stats');

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
    res.json(data)
    admin_stats.logAdminStats('5', req.user.name);
  })

});

module.exports = router;
