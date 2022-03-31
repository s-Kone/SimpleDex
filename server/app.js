var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var pool = require('./modules/pool.js');
var init_db = require('./modules/database_init.js');
require('dotenv').config();

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var documentationRouter = require('./routes/documentation');
var searchPokemonRouter = require('./routes/searchPokemon');
var postTeamRouter = require('./routes/postTeam');
var postsRouter = require('./routes/posts');
var loginRouter = require('./routes/login');

const endPointRoot = '/comp4537/termproject/api/v1';

var app = express();

// Initialize Database
init_db.init_db();

// set pool
app.set('pool', pool);

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// routers
app.use(endPointRoot, indexRouter);
app.use(endPointRoot + '/admin', adminRouter);
app.use(endPointRoot + '/documentation', documentationRouter);
app.use(endPointRoot + '/searchPokemon', searchPokemonRouter);
app.use(endPointRoot + '/postTeam', postTeamRouter);

app.use(endPointRoot + '/posts', postsRouter);
app.use(endPointRoot + '/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
