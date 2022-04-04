var admin_stats = require('../modules/admin_stats');
var pool = require('../modules/pool');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

router.get('/', auth.authenticateToken, async (req, res) => {
  try {
    let userEmail = req.user.email

    // check if req.user is admin
    let text = 'select usertypeid from users where email = $1'
    let values = [userEmail]
    const db_res = await pool.query(text, values)
    if (db_res.rows[0].usertypeid == 1)
    {
      var adminStats = await admin_stats.getAdminStats()
      res.json(adminStats)
    }
    else
    {
      res.status(400).send('Authentication failed');
    }
  
    admin_stats.logAdminStats('4', userEmail);
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }

});

module.exports = router;
