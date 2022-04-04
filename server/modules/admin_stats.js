var date = require('./date');
var pool = require('./pool');
var user_utils = require('./user_utils')

// Log Admin Stats
exports.logAdminStats = async (endpointID, userEmail) => {
    let utcTime = date.getCurrentUTC();
    
    if (!userEmail) {
        let text = 'insert into LogEndpointAccess (EndpointID, LogDateUTC) values ($1, $2);'
        let values = [endpointID, utcTime]
        await pool.query(text, values)
    }
    else {
        let userID = await user_utils.getUserID(userEmail)
        if (!userID) {
            console.log('could not log admin stats')
            return
        }
    
        let text = 'insert into LogEndpointAccess (EndpointID, UserID, LogDateUTC) values ($1, $2, $3);'
        let values = [endpointID, userID, utcTime]
        await pool.query(text, values)
    }

}

// get admin stats and return json
exports.getAdminStats = async () => {
    let text = 'select endpointdesc, e.endpointid, endpointpath, method, count (LogEndpointAccessID) from LogEndpointAccess l full join endpoint e on l.endpointid = e.endpointid group by e.EndpointID, endpointdesc, endpointpath, method order by e.endpointid ';
    const db_res = await pool.query(text);
    return db_res.rows
}
