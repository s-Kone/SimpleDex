var homeRouter = require('./home');
var adminRouter = require('./admin');
var documentationRouter = require('./documentation');
var searchPokemonRouter = require('./searchPokemon');
var teamsRouter = require('./teams');
var usersRouter = require('./users');

const endPointRoot = '/comp4537/termproject/api/v1';

module.exports = app => {
    app.use(endPointRoot + '', homeRouter);
    app.use(endPointRoot + '/admin', adminRouter);
    app.use(endPointRoot + '/documentation', documentationRouter);
    app.use(endPointRoot + '/searchPokemon', searchPokemonRouter);
    app.use(endPointRoot + '/teams', teamsRouter);
    app.use(endPointRoot + '/users', usersRouter);
}
