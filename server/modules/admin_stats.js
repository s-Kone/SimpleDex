var date = require('./date');
var pool = require('./pool');


// Log Admin Stats
exports.logAdminStats = async (endpointID, userEmail) => {
    console.log(userEmail)
    let utcTime = date.getCurrentUTC();
    let findUserQuery = 'select userid from users where Email = $1'
    let findUserValues = [userEmail]
    const db_res = await pool.query(findUserQuery, findUserValues)
    const userID = db_res.rows[0].userid

    let text = 'insert into LogEndpointAccess (EndpointID, UserID, LogDateUTC) values ($1, $2, $3);'
    let values = [endpointID, userID, utcTime]
    await pool.query(text, values)
}

// get admin stats and return json
// TODO: avoid callback stacking
exports.getAdminStats = async () => {
    let text = 'select endpointdesc, count (LogEndpointAccessID) from LogEndpointAccess l inner join endpoint e on l.endpointid = e.endpointid  group by l.EndpointID, endpointdesc';
    const db_res = await pool.query(text);
    return db_res.rows
}
