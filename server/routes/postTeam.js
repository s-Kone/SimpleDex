var pool = require('../modules/pool.js');
var date = require('../modules/date.js');
var admin_stats = require('../modules/admin_stats');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();


// TODO: change the method back to GET
router.get('/', auth.authenticateToken, (req, res, next) => {
    // When this endpoint is hit, we need the userID
    // TODO: extract userID from app
    let userID = '1';

    // TODO: figure out team ID
    let teamID = req.query.teamID;
/*

{
    1,2,3,4,5,6
}
*/
    // Get Date
    const utcTime = date.getCurrentUTC();

    // TODO: figure out pokemonID
    let pokemonID = req.query.pokemonID;

    // TODO: check if table exists before executing
    let sql = 'insert into TeamRecord (teamID, userID, PokemonID, DateModifiedUTC) values (?, ?, ?, ?);'
    pool.query(sql, [userID, teamID, pokemonID, utcTime], function(err, results){
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            let jsonRes = {};
            jsonRes.success = 'true';
            jsonRes.payload = results;
            res.send(JSON.stringify(jsonRes));
        }
    });

    // Log Admin Stats
    admin_stats.logAdminStats('2', userID);

});

module.exports = router;
