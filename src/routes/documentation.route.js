const swaggerUi = require('swagger-ui-express');
const swaggerDocumentation = require('../swagger.json');
const CarController = require('../app/controller/documentationController');


module.exports = (server, routes, prefix ='/api/v1/documentation') => {

    routes.get('/', PersonController.list);    
    routes.post('/authenticate', async (req, res ) => {
        const { email, password } = req.body
        const person = await Person.findOne({ email });
    })


    server.use(prefix, routes);
};
