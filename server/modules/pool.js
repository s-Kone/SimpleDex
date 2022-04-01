const Pool = require('pg').Pool;

const pool  = new Pool({
  host     : 'localhost',
  user     : 'pokemon',
  password : 'pokemon123',
  database : 'pokemon',
  port     : 5432
});

module.exports = {

  /**
   * For single query
   * @param {*} text 
   * @param {*} params 
   * @returns 
   */
  async query(text, params) {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
  },

  /**
   * Checks out a client for several queries in a row in a transaction
   * Performs error handling for if leak occurs
   * @returns 
   */
  async getClient() {
    const client = await pool.connect()
    const query = client.query
    const release = client.release
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!')
      console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args) => {
      client.lastQuery = args
      return query.apply(client, args)
    }
    client.release = () => {
      // clear our timeout
      clearTimeout(timeout)
      // set the methods back to their old un-monkey-patched version
      client.query = query
      client.release = release
      return release.apply(client)
    }
    return client
  }
}


// Wrapper for query function using pool
// Credit Adam Yost at StackOverflow
// module.exports = {
//   query: function() {
//     var sql_args = [];
//     var args = [];
//     for (var i=0; i<arguments.length; i++) {
//       args.push(arguments[i]);
//     } 
//     var callback = args[args.length-1]; //last arg is callback
//     pool.getConnection(function(err, connection) {
//       if(err) {
//         console.log(err);
//         return callback(err);
//       }
//       if(args.length > 2) {
//         sql_args = args[1];
//       }
//       connection.query(args[0], sql_args, function(err, results) {
//         connection.release(); // always put connection back in pool after last query
//         if(err) {
//           console.log(err);
//           return callback(err);
//         }
//         callback(null, results);
//       });
//     });
//   }
// };
