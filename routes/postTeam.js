var express = require('express');
var pool = require('../modules/pool.js');
var date = require('../modules/date.js');
var router = express.Router();

router.post('/', (req, res, next) => {
    // When this endpoint is hit, we need the userID
    // TODO: extract userID from app
    let userID = '0';

    // TODO: figure out team ID
    let teamID = '0';

    // Get Date
    const utcTime = date.getCurrentUTC();

    // TODO: figure out pokemonID
    let pokemonID = '7';

    // TODO: check if table exists before executing
    let sql = 'insert into teamrecord (teamID, userID, PokemonID, DateModifiedUTC) values (?, ?, ?, ?);'
    pool.query(sql, [userID, teamID, pokemonID, utcTime], function(err, results){
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            res.send(results);
        }
    });

    // Admin stats
    // TODO: make this into a middleware
    let adminSql = 'insert into LogEndpointAccess (EndpointID, UserID, LogDateUTC) values (2, ?, ?);'
    pool.query(adminSql, [userID, utcTime], function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });
});

module.exports = router;
