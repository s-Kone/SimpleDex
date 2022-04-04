const pool = require('../modules/pool.js');
const date = require('../modules/date.js');
const admin_stats = require('../modules/admin_stats');
const user_utils = require('../modules/user_utils')
const Router = require('express-promise-router');
const auth = require('../modules/auth');

const router = new Router();

router.post('/', auth.authenticateToken, async (req, res,next) => {
    try {
        let userEmail = req.user.email
        let pokemon = req.body.pokemon
        console.log(pokemon)
        // validate inputs
        let userID = await user_utils.getUserID(userEmail)
        if(!userID) {
            return res.status(500).send()
        }
    
        if (!isJsonString(pokemon))
        {
            return res.status(400).send('Invalid pokemon json')
        }
        let pokemonText = JSON.stringify(pokemon)
    
        let userTeamID = await getNewUserTeamID(userID)
        // console.log(`${userTeamID} ${userID} ${JSON.stringify(pokemon)}`)
        
        // store in db
        let text = 'insert into teamrecord (UserTeamID, UserID, Pokemon) values ($1, $2, $3)'
        let values = [userTeamID, userID, pokemonText]
        const db_res = await pool.query(text, values)
        res.status(201).send()
        
        admin_stats.logAdminStats('7', userEmail);
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
    
})

router.get('/', auth.authenticateToken, async (req, res, next) => {
    try {
        let userEmail = req.user.email
        
        // validate inputs
        let userID = await user_utils.getUserID(userEmail)
        if(!userID) {
            console.log('no user id')
            return res.status(500).send()
        }

        let text = 'select * from teamrecord where userid = $1'
        let values = [userID]
        const db_res = await pool.query(text, values)
        res.json(db_res.rows)

        admin_stats.logAdminStats('8', userEmail);
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }

});

router.patch('/', auth.authenticateToken, async (req, res,next) => {
    try {
        let userEmail = req.user.email
        let pokemon = req.body.pokemon
        let userTeamID = req.body.userTeamID
    
        // validate inputs
        let userID = await user_utils.getUserID(userEmail)
        if(!userID) {
            return res.status(500).send()
        }
    
        if (!isJsonString(pokemon))
        {
            return res.status(400).send('Invalid pokemon json')
        }

        let pokemonText = JSON.stringify(pokemon)
    
        // check team exists
        if ((await doesTeamExist(userID, userTeamID)) == false) {
            return res.status(400).send('Team does not exist')
        }

        let text = 'update teamrecord set pokemon = $1 where userid = $2 and userteamid = $3'
        let values = [pokemonText, userID, userTeamID]
        const db_res = await pool.query(text, values)
        res.status(200).send()

        admin_stats.logAdminStats('9', userEmail);
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

router.delete('/', auth.authenticateToken, async (req, res,next) => {
    try {
        let userEmail = req.user.email
        let userTeamID = req.body.userTeamID
    
        // validate inputs
        let userID = await user_utils.getUserID(userEmail)
        if(!userID) {
            return res.status(500).send()
        }

        // check team exists
        if ((await doesTeamExist(userID, userTeamID)) == false) {
            return res.status(400).send('Team does not exist')
        }

        let text = 'delete from teamrecord where userid = $1 and userteamid = $2'
        let values = [userID, userTeamID]
        const db_res = await pool.query(text, values)
        res.status(200).send()

        admin_stats.logAdminStats('10', userEmail);
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
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

let doesTeamExist = async (userID, userTeamID) => {
    let text = 'select * from teamrecord where userid = $1 and userteamid = $2'
    let values = [userID, userTeamID]
    const db_res = await pool.query(text, values)
    if (db_res.rowCount == 0){
        console.log('team not found')
        return false
    }
    return true
}

module.exports = router;
