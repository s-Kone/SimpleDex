var axios = require('axios');
var date = require('../modules/date');
var admin_stats = require('../modules/admin_stats');
const Redis = require("redis");
// const RedisClient = Redis.createClient() // commented out because causing crash
const DEFAULT_EXPIRATION = 3600
var Router = require('express-promise-router');
var auth = require('../modules/auth');

const router = new Router();

/**
 * GET request for pokemon listings
 * Query param: name=nameOfPokemon
 */
router.get('/name', auth.authenticateToken, async (req, res, next) => {
  let name = req.query.name
  if (!name) {
    console.log('error searchPokemon: no param')
    return
  }

  // // Get Date
  // const utcTime = date.getCurrentUTC();
  // // Log Admin Stats
  // admin_stats.logAdminStats('1', userID);
  // // TODO: Handle error in some way. Probably return some http status code
})


router.get('/type', async (req, res, next) => {
  let type = req.query.type
  if (!type) {
    console.log('error searchPokemon: no param')
    return
  }
  const pokemon = await getOrSetCache(`pokemon?id=${type}`, async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}`,
    )
    return data
  })
  res.json(pokemon["pokemon"])
  // let userID = 1;

  // // Get Date
  // const utcTime = date.getCurrentUTC();
  // // Log Admin Stats
  // admin_stats.logAdminStats('1', userID);
  // // TODO: Handle error in some way. Probably return some http status code
})

/** Commenting out because its erroring out */
function getOrSetCache(){}
// function getOrSetCache(key, callback) {
//   return new Promise((resolve, reject) => {
//     RedisClient.get(key, async (error, data) => {

//       if (error) return reject(error)
//       if (data != null) {
//         console.log("cache hit")
//         return resolve(JSON.parse(data))
//       }
//       const newData = await callback()
//       console.log("cache miss")
//       RedisClient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(newData))
//       resolve(newData)
//     })
//     .catch(axerror => {
//       console.error(axerror);
//     })

//   // Log Admin Stats
//   // admin_stats.logAdminStats('1', userID);

//   })
// }

// Copy-pastad unauthorized version. Note the only difference is the lack of the middleware function
router.get('/unauth', async (req, res, next) => {
  let param = req.query.name;

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

})

module.exports = router;

