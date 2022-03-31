var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/', function(req, res, next) {
    // Authenticate user

    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    console.log(process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
});

module.exports = router;
