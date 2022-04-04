const pool = require('./pool.js');

// TODO: write a sql script that will initialize database and tables, checking if each exists on the way
// let sql = 'create table if not exists';

const init_db = () => {
    // pool.query(sql, function(err, results){
        
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log(results);
    //     }
    // });
};

exports.init_db = init_db;
