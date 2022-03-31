var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

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
router.get('/', authenticateToken, function(req, res, next) {
    res.json(posts.filter(post => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        console.log('nope');
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

module.exports = router;
