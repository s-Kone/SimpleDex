var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../modules/pool');
var Router = require('express-promise-router');

const router = new Router();

const users = [];
const defaultNumHashRounds = 10;

router.post('/login', async (req, res, next) => {
    // TODO: Authenticate user creds against db

    const user = users.find(user => user.name == req.body.name);
    if (user == null) {
        return res.status(400).send('Authentication failed');
    }
    try {
        if ( await bcrypt.compare(req.body.password, user.password) ) {
            const userSignObj = { name: user.name };

            const accessToken = jwt.sign(userSignObj, process.env.ACCESS_TOKEN_SECRET);
            // res.json({ accessToken: accessToken });
            // res.cookie('jwt', accessToken, { secure: true, httpOnly: true });
            res.cookie('jwt', accessToken);
            res.send('Success');
        }
        else {
            res.send('Invalid credentials');
        }
    } catch {
        res.status(500).send('Authentication failed');
    }


});

router.post('/register', async (req, res, next) => {
    res.send('hi');
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, defaultNumHashRounds);
        const user = {  id: Date.now().toString(),
                        name: req.body.name,
                        email: req.body.email,
                        password: hashedPassword }
        users.push(user)
        res.status(201).send();
    }
    catch {
        res.status(500).send();
    }
});

router.get('/', async (req, res, next) => {
    console.log('get users');
    const db_res = await db.query('SELECT * FROM users;');
    res.send(db_res);
})

module.exports = router;
