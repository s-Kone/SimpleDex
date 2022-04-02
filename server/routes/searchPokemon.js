var express = require('express');
var axios = require('axios');
var date = require('../modules/date');
var admin_stats = require('../modules/admin_stats');
var router = express.Router();
const Redis = require("redis");
const { resource } = require('../app');
const RedisClient = Redis.createClient()
const DEFAULT_EXPIRATION = 3600
/**
 * GET request for pokemon listings
 * Query param: pokemon=nameOfPokemon
 */
router.get('/name', async (req, res, next) => {
  let name = req.query.name
  if (!name) {
    console.log('error searchPokemon: no param')
    return
  }
  const pokemon = await getOrSetCache(`pokemon:name=${name}`, async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    )
    return data
  })
  res.json(pokemon)
  // let userID = 1;

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
function getOrSetCache(key, callback) {
  return new Promise((resolve, reject) => {
    RedisClient.get(key, async (error, data) => {

      if (error) return reject(error)
      if (data != null) {
        console.log("cache hit")
        return resolve(JSON.parse(data))
      }
      const newData = await callback()
      console.log("cache miss")
      RedisClient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(newData))
      resolve(newData)
    })
  })
}
module.exports = router;
