const { homeRoutes } = require('../routers/index');

module.exports = (app) => {
    app.use('/', homeRoutes);
}
