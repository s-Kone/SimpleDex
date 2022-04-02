var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../modules/pool');
var Router = require('express-promise-router');

const router = new Router();

router.post('/login', async (req, res, next) => {
    // TODO: check if email is valid
    const email = req.body.email;
    
    const text = 'Select HashedPassword FROM Users WHERE Email = $1';
    const values = [email];

    const db_res = await db.query(text, values);
    const hashedPassword = db_res.rows[0].hashedpassword;

    if (db_res.rowCount == 0) {
        return res.status(400).send('Authentication failed');
    }
    try {
        if ( await bcrypt.compare(req.body.password, hashedPassword) ) {
            const userSignObj = { name: email };
            const accessToken = jwt.sign(userSignObj, process.env.ACCESS_TOKEN_SECRET);
            // res.json({ accessToken: accessToken });
            // res.cookie('jwt', accessToken, { secure: true, httpOnly: true });
            res.cookie('jwt', accessToken);
            res.send('Success');
        }
        else {
            res.send('Invalid credentials');
        }
    } catch(err) {
        console.log(err);
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
                        userTypeID: 2 // user
                    }
        console.log(user);

        // TODO: validate user info, check against existing user...all that
        const text = 'INSERT INTO USERS (Username, Email, HashedPassword, UserTypeID) VALUES ($1, $2, $3, $4)';
        const values = [user.name, user.email, user.hashedPassword, user.userTypeID];
        const db_res = await db.query(text, values); // TODO: error handling
        res.status(201).send();

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
