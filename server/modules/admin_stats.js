var date = require('./date');
var pool = require('./pool');

let jsonStats = {};

// Log Admin Stats
exports.logAdminStats = (endpointID, userID) => {
    let utcTime = date.getCurrentUTC();
    let adminSql = 'insert into LogEndpointAccess (EndpointID, UserID, LogDateUTC) values (?, ?, ?);'

    pool.query(adminSql, [endpointID, userID, utcTime], function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
        }
    });
}

// get admin stats and return json
exports.getAdminStats = () => {
    jsonStats = {};
    let sql = 'select count (LogEndpointAccessID) from LogEndpointAccess where EndpointID = 1';
    pool.query(sql, function(err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
            // jsonStats.SearchPokemon = results[0]['count (LogEndpointAccessID)'];
            jsonStats.fake = 'hello';
        }
    });

    sql = 'select count (LogEndpointAccessID) from LogEndpointAccess where EndpointID = 2';
    pool.query(sql, function(err, results) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(results);
            jsonStats.PostTeam = results[0]['count (LogEndpointAccessID)'];
        }
    });

    jsonStats.something = 'hi';
    console.log(jsonStats);
    return jsonStats;
}
