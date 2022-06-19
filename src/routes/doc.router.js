const routes = require ('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


module.exports = (server, routes, prefix ='/api/v1/') => {
    routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
    server.use(prefix, routes);
};
