var express = require('express');
var axios = require('axios');
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
});

module.exports = router;
