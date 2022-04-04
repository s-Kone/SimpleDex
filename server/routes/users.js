var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../modules/pool');
var Router = require('express-promise-router');
var admin_stats = require('../modules/admin_stats');

const router = new Router();

router.post('/login', async (req, res, next) => {
    var email = req.body.email
    var password = req.body.password
    if (!validateLoginInputs(email, password))
    {
        res.status(400).send('Invalid credentials')
        return
    }
    
    const text = 'Select HashedPassword FROM Users WHERE Email = $1';
    const values = [email];

    const db_res = await db.query(text, values);
    const hashedPassword = db_res.rows[0].hashedpassword;

    if (db_res.rowCount <= 0) {
        return res.status(400).send('Authentication failed');
    }
    try {
        if ( await bcrypt.compare(req.body.password, hashedPassword) ) {
            const userSignObj = { email: email };
            const accessToken = jwt.sign(userSignObj, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
            admin_stats.logAdminStats('2', email);
        }
        else {
            res.status(400).send('Invalid credentials');
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('Authentication failed');
    }
});

router.post('/register', async (req, res, next) => {
    try {
        var email = req.body.email
        var password = req.body.password
        var name = req.body.name

        if ( await checkUserExists(email))
        {
            res.status(400).send('Invalid credentials')
            return
        }

        if (!validateRegisterInputs(email, password, name))
        {
           res.status(400).send('Credentials do not satisfy requirements')
           return
        }
        console.log('passed all validation')
        const hashedPassword = await bcrypt.hash(password, 10);
        var user = {    date: Date.now().toString(),
                        name: name,
                        email: email,
                        hashedPassword: hashedPassword,
                        userTypeID: 2 // user
                    }

        const text = 'INSERT INTO USERS (Username, Email, HashedPassword, UserTypeID) VALUES ($1, $2, $3, $4)';
        const values = [user.name, user.email, user.hashedPassword, user.userTypeID];
        const db_res = await db.query(text, values); // TODO: error handling
        // console.log(db_res);
        admin_stats.logAdminStats('1', user.email);
        res.status(201).send();
        
    }
    catch (err) {
        console.log(err)
        res.status(500).send();
    }
});

// testing-only route
router.get('/', async (req, res, next) => {
    const db_res = await db.query('SELECT * FROM users;');
    res.send(db_res.rows);
})

let checkUserExists = async (userEmail) => {
    var text = 'select * from users where email = $1'
    var values = [userEmail]
    const db_res = await db.query(text, values)
    return (db_res.rowCount != 0)
}

let validatePassword = (password) => {
    const regex = new RegExp('^(?=.*[0-9]).{8,}$') // min 8 characters and at least one number
    return ( regex.test(password) && password.length < 254 )
}

let validateEmail = (email) => {
    return email.length < 256 && /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email); // some char + @ + 2 chars + . + 2 chars
}

let validateName = (name) => {
    return ( name.length < 20 )
}

let validateRegisterInputs = (email, password, name) => {
    return validateEmail(email) && validatePassword(password) && validateName(name)
}

let validateLoginInputs = (email, password) => {
    return validateEmail(email) && validatePassword(password)
}

module.exports = router;
