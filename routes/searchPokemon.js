var express = require('express');
var axios = require('axios');
var date = require('../modules/date');
var pool = require('../modules/pool');
var router = express.Router();


/**
 * GET request for pokemon listings
 * Query param: pokemon=nameOfPokemon
 */
router.get('/', function(req, res, next) {
  let param = req.query.pokemon;

  // TODO: Handle error in some way. Probably return some http status code
  if (!param)
  {
    console.log('error searchPokemon: no param');
    return;
  }

  // TODO: extract userID from app
  let userID = 0;

  // Get Date
  const utcTime = date.getCurrentUTC();

  // Make call to pokeapi
  axios
    .get('https://pokeapi.co/api/v2/pokemon/' + param)
    .then(axres => {
      console.log(`statusCode: ${axres.status}`);
      console.log(axres.data);

      // TODO: handle 'not found' case and any other error case

      res.type('json');
      res.send(axres.data);
    })
    .catch(axerror => {
      console.error(axerror);
    })

  // Admin stats
  // TODO: make this into a middleware
  let adminSql = 'insert into LogEndpointAccess (EndpointID, UserID, LogDateUTC) values (1, ?, ?);'
  pool.query(adminSql, [userID, utcTime], function (err, results) {
      if (err) {
          console.log(err);
      }
      else {
          console.log(results);
      }
  });

});

module.exports = router;
