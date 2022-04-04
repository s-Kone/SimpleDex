const homeRouter = require('./home');
const adminRouter = require('./admin');
const documentationRouter = require('./documentation');
const searchPokemonRouter = require('./searchPokemon');
const teamsRouter = require('./teams');
const usersRouter = require('./users');

const endPointRoot = '/comp4537/termproject/api/v1';

module.exports = app => {
    app.use(endPointRoot + '', homeRouter);
    app.use(endPointRoot + '/admin', adminRouter);
    app.use(endPointRoot + '/documentation', documentationRouter);
    app.use(endPointRoot + '/searchPokemon', searchPokemonRouter);
    app.use(endPointRoot + '/teams', teamsRouter);
    app.use(endPointRoot + '/users', usersRouter);
}
