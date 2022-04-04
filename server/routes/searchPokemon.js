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
  let userEmail = req.user.email
  let name = req.query.name
  if (!name) {
    console.log('error searchPokemon: no param')
    return
  }
  axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  ).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    console.log(err)
    res.status(400).send('Pokemon not found')
  })

  admin_stats.logAdminStats('5', userEmail);
})


router.get('/type', auth.authenticateToken, async (req, res, next) => {
  let userEmail = req.user.email
  let type = req.query.type
  if (!type) {
    console.log('error searchPokemon: no param')
    return
  }

  axios.get(
    `https://pokeapi.co/api/v2/type/${type}`,
  ).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    console.log(err)
    res.status(400).send('Type not found')
  })

  admin_stats.logAdminStats('6', userEmail);
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

module.exports = router;

