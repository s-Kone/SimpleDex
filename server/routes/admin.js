var admin_stats = require('../modules/admin_stats');
var pool = require('../modules/pool');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

router.get('/', auth.authenticateToken, async (req, res) => {
  // check username and password against db
  let username = req.query.username;
  let password = req.query.password;

  // TODO: Develop stored procedure on MySQL to authenticate credentials or look into other authentication solutions
  let sql = 'select * from User where usertypeid = 1 limit 1;'
    pool.query(sql, function(err, results){
    if (err) {
        console.log(err);
        res.send(err);
    }
    else {
        // console.log(results[0].Username);
        // console.log(results[0].UserPassword);
        // console.log(results);

        // TODO: make this async work
        if (username === results[0].Username && password === results[0].UserPassword) {
          let statsJson = getAdminStats(); // this dont work right now
          statsJson = {searchPokemon: 3, PostTeam: 5};
          res.type('json');
          res.send(statsJson);
        }
        else {
          res.type('json');
          res.send("{'error': 'invalid credentials'}");
        }

    }
  });
});

// TODO: avoid callback stacking
const getAdminStats = async () => {
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

module.exports = router;
