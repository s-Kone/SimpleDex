const jwt = require('jsonwebtoken');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

const posts = [
    {
      username: 'alex',
      title: 'post 1'
    }
    ,{
      username: 'jim',
      title: 'post 2'
    }
]

/* GET home page. */
router.get('/', auth.authenticateToken, function(req, res, next) {
    res.json(posts.filter(post => post.username === req.user.name));
});



module.exports = router;
