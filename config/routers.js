const { homeRoutes, translationsRoutes } = require('../routers/index');

module.exports = (app) => {
    app.use('/', homeRoutes);
    app.use('/translations', translationsRoutes);
}
