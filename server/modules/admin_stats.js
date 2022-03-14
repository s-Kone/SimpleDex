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
// TODO: avoid callback stacking
exports.getAdminStats = async () => {
    jsonStats = {};
    let sql = 'select count (LogEndpointAccessID) from LogEndpointAccess where EndpointID = 1';
    pool.query(sql, function(err, results) {
        if (err) {
            console.log(err);
        }
        else {
            jsonStats.SearchPokemon = results[0]['count (LogEndpointAccessID)'];

            sql = 'select count (LogEndpointAccessID) from LogEndpointAccess where EndpointID = 2';
            pool.query(sql, function(err, results) {
                if (err) {
                    console.log(err);
                }
                else {
                    jsonStats.PostTeam = results[0]['count (LogEndpointAccessID)'];
                    console.log(jsonStats);
                    return jsonStats;
                }
            });
        }
    });
}
