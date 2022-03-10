// Requires
const http = require('http');
const url = require('url');
const express = require('express');
const api_routes = require('./routes/api_routes');

// Constants
const endPointRoot = '/comp4537/termproject/API/V1';
const port = 8084;
const serverListeningMsg = `SimpleDex Server listening at port ${port}`;


// Server start
const app = express();
app.use(endPointRoot, api_routes);
app.listen(port, () =>
{
    console.log(serverListeningMsg);
})
