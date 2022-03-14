var express = require('express');
var admin_stats = require('../modules/admin_stats');
var pool = require('../modules/pool');
var router = express.Router();


router.get('/', function(req, res, next) {
  // check username and password against db
  let username = req.query.username;
  let password = req.query.password;

  // TODO: Develop stored procedure on MySQL to authenticate credentials or look into other authentication solutions
  let sql = 'select * from user where usertypeid = 1 limit 1;'
  pool.query(sql, function(err, results){
    if (err) {
        console.log(err);
        res.send(err);
    }
    else {
        // console.log(results[0].Username);
        // console.log(results[0].UserPassword);
        // console.log(results);

        if (username === results[0].Username && password === results[0].UserPassword) {
          
          // Construct api stats
          pool.query(sql, function(err, results) {
            if (err) {
              console.log(err);
            }
            else {
              let statsJson = admin_stats.getAdminStats();
              res.type('json');
              res.send(statsJson);
            }
          });
        }
        else {
          res.type('json');
          res.send("{'error': 'invalid credentials'}");
        }

    }
  });
});

module.exports = router;
