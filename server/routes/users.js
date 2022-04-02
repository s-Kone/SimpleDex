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
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        var user = {    date: Date.now().toString(),
                        name: req.body.name,
                        email: req.body.email,
                        hashedPassword: hashedPassword,
                        userTypeID: 2
                    }
        console.log(user);
        user.userType = 2; // user

        // TODO: validate user info, check against existing user...all that
        const text = 'INSERT INTO USERS (Username, Email, HashedPassword, UserTypeID) VALUES ($1, $2, $3, $4)';
        const values = [user.name, user.email, user.hashedPassword, user.userTypeID];
        const db_res = await db.query(text, values);
        res.status(201).send(db_res);

        // db.query(text, values).then(
        //     (res) => {
        //         console.log(res);
        //         res.status(201).send(db_res);
        //     },
        //     (rej) => {
        //         console.log(rej);
        //         res.status(500).send();
        //     }
        // );
    }
    catch {
        res.status(500).send();
    }
});

router.get('/', async (req, res, next) => {
    const db_res = await db.query('SELECT * FROM users;');
    res.send(db_res.rows);
})

module.exports = router;
