var date = require('./date');
var pool = require('./pool');

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
