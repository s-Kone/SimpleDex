const fs = require('fs');
const Router = require('express-promise-router');
const auth = require('../modules/auth');
const admin_stats = require('../modules/admin_stats');

const router = new Router();

/* GET documentation page. */
router.get('/', auth.authenticateToken, function(req, res, next) {
  let userEmail = req.user.email
  fs.readFile('./swagger.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send()
      return;
    }
    let obj = JSON.parse(data)
    admin_stats.logAdminStats('3', null);
    res.json(obj)
  })

});

module.exports = router;
