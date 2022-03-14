var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET documentation page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('documentation', { title: 'SimpleDex Documentation' });
=======
  fs.readFile('./swagger.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.type('json');
      res.send("{status: error}");
      return;
    }
    res.type('json');
    res.send(data);
  })
>>>>>>> 132bac1835dda91e214fa0de291a25b058e5db80
});

module.exports = router;
