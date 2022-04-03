var JWT = require('jsonwebtoken');

exports.authenticateToken =  (req, res, next) => {
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null) {
        return res.sendStatus(401);
    }
  
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        console.log(req.user);
        next();
    })
}
