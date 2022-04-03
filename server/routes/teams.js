var pool = require('../modules/pool.js');
var date = require('../modules/date.js');
var admin_stats = require('../modules/admin_stats');
var user_utils = require('../modules/user_utils')
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

router.post('/', auth.authenticateToken, async (req, res,next) => {
    try {
        let userEmail = req.user.name
        let pokemon = req.body.pokemon
        console.log(pokemon)
        // validate inputs
        let userID = await user_utils.getUserID(userEmail)
        if(!userID) {
            res.status(500).send()
        }
    
        if (!isJsonString(pokemon))
        {
            return res.status(400).send('Invalid pokemon json')
        }
    
        let userTeamID = await getNewUserTeamID(userID)
        // console.log(`${userTeamID} ${userID} ${JSON.stringify(pokemon)}`)
        
        // store in db
        let text = 'insert into teamrecord (UserTeamID, UserID, Pokemon) values ($1, $2, $3)'
        let values = [userTeamID, userID, pokemon]
        const db_res = await pool.query(text, values)
        res.status(201).send()
        
        admin_stats.logAdminStats('7', userEmail);
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
    
})

router.get('/', auth.authenticateToken, async (req, res, next) => {
    let userEmail = req.user.name
    
    // validate inputs
    let userID = await user_utils.getUserID(userEmail)
    if(!userID) {
        res.status(500).send()
    }

    let text = 'select * from teamrecord where userid = $1'
    let values = [userID]
    const db_res = await pool.query(text, values)
    res.json(db_res.rows)

    admin_stats.logAdminStats('8', userEmail);
});

router.put('/', auth.authenticateToken, async (req, res,next) => {
    let userEmail = req.user.name
    admin_stats.logAdminStats('9', userEmail);
})

let getNewUserTeamID = async (userID) => {
    let text = 'select max(userteamid) from teamrecord where userid = $1'
    let values = [userID]
    const db_res = await pool.query(text, values)
    // console.log(db_res)
    if (db_res.rows[0].max == null || db_res.rows[0].max == 'null')
    {
        return 0
    }
    return db_res.rows[0].max + 1
}

let isJsonString = (data) => {
    try {
        JSON.parse(JSON.stringify(data));
    } catch (e) {
        console.log(e)
        return false;
    }
    return true;
}

module.exports = router;
