const jwt = require('jsonwebtoken');
var Router = require('express-promise-router');

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

let authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
      return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
          return res.sendStatus(403);
      }
      req.user = user;
      next();
  })
}

/* GET home page. */
router.get('/', authenticateToken, function(req, res, next) {
    res.json(posts.filter(post => post.username === req.user.name));
});



module.exports = router;
