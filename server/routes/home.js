var Router = require('express-promise-router');

const router = new Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'SimpleDex Home' });
});

module.exports = router;
