const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(req, res) {
    res.send('API home page');
});
  
// About page route
router.get('/about', function(req, res) {
    res.send('About this API');
});
  

module.exports = router;
