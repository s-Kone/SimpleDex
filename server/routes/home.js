const Router = require('express-promise-router');
const auth = require('../modules/auth');

const router = new Router();

/* GET home page. */
router.get('/', auth.authenticateToken, function(req, res, next) {
  res.render('home', { title: 'SimpleDex Home' });
});

module.exports = router;
