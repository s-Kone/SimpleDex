const express = require('express');
const fs = require('fs');


const router = express.Router();

// Home page route
router.get('/', function(req, res)
{
    fs.readFile('./html/index.html', 'utf8', (err, data) =>
    {
        if (err)
        {
            console.error(err);
            return;
        }
        res.type('html');
        res.send(data);
    })
});

// About page route
router.get('/documentation', function(req, res)
{
    fs.readFile('./html/admin.html', 'utf8', (err, data) =>
    {
        if (err)
        {
            console.error(err);
            return;
        }
        res.type('html');
        res.send(data);
    })
});

router.get('/admin', function(req, res)
{
    fs.readFile('./html/admin.html', 'utf8', (err, data) =>
    {
        if (err)
        {
            console.error(err);
            return;
        }
        res.type('html');
        res.send(data);
    })
});
  

module.exports = router;
