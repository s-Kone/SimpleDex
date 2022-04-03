var pool = require('../modules/pool.js');
var date = require('../modules/date.js');
var admin_stats = require('../modules/admin_stats');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

router.post('/', auth.authenticateToken, async (req, res,next) => {
    let userEmail = req.user.name
    admin_stats.logAdminStats('7', userEmail);
})

router.get('/', auth.authenticateToken, async (req, res, next) => {
    let userEmail = req.user.name
    admin_stats.logAdminStats('8', userEmail);
});

router.put('/', auth.authenticateToken, async (req, res,next) => {
    let userEmail = req.user.name
    admin_stats.logAdminStats('9', userEmail);
})



module.exports = router;
