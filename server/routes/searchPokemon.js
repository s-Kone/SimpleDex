var axios = require('axios');
var date = require('../modules/date');
var admin_stats = require('../modules/admin_stats');
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

/**
 * GET request for pokemon listings
 * Query param: pokemon=nameOfPokemon
 */
router.get('/', auth.authenticateToken, function(req, res, next) {
  let param = req.query.pokemon;

  // TODO: Handle error in some way. Probably return some http status code
  if (!param)
  {
    console.log('error searchPokemon: no param');
    return;
  }

  // TODO: extract userID from app
  let userID = 1;

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

  // Log Admin Stats
  // admin_stats.logAdminStats('1', userID);

});


// Copy-pastad unauthorized version. Note the only difference is the lack of the middleware function
router.get('/unauth', function(req, res, next) {
  let param = req.query.pokemon;

  // TODO: Handle error in some way. Probably return some http status code
  if (!param)
  {
    console.log('error searchPokemon: no param');
    return;
  }

  // TODO: extract userID from app
  let userID = 1;

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

  // Log Admin Stats
  // admin_stats.logAdminStats('1', userID);

});

module.exports = router;
