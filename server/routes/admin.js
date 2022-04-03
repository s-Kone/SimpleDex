var admin_stats = require('../modules/admin_stats');
var pool = require('../modules/pool');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

router.get('/', auth.authenticateToken, async (req, res) => {
  // check if req.user is admin
  let text = 'select usertypeid from users where email = $1'
  let values = [req.user.name]
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

  admin_stats.logAdminStats('6', req.user.name);
});

module.exports = router;
