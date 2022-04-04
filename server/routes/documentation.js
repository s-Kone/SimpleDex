var fs = require('fs');
var Router = require('express-promise-router');
var auth = require('../modules/auth');
var admin_stats = require('../modules/admin_stats');

const router = new Router();

/* GET documentation page. */
router.get('/', function(req, res, next) {
  fs.readFile('./swagger.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send()
      return;
    }
    admin_stats.logAdminStats('3', null);
    res.json(data)
  })

});

module.exports = router;
