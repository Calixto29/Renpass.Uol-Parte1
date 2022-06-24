const AuthController = require('../app/controller/AuthController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', AuthController.personAuthenticate);

  server.use(prefix, routes);
};
