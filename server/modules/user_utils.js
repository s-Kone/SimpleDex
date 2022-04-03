var pool = require('./pool')

exports.getUserID = async (userEmail) => {
    var text = 'select UserID from users where email = $1'
    var values = [userEmail]
    const db_res = await pool.query(text, values)
    if (db_res.rowCount == 0)
        return false
    return db_res.rows[0].userid
}
