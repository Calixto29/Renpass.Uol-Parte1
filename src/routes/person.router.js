const PersonController = require('../app/controller/PersonController');
const authSchemaPerson = require('../middleware/personValidation');
const authSchemaUpdatePerson = require('../middleware/personUpdateValidation');


module.exports = (server, routes, prefix ='/api/v1/person') => { //prefix evita de criar várias rotas
    routes.post('/', authSchemaPerson, PersonController.create);
    routes.get('/', PersonController.list);
    routes.get('/:id', PersonController.listId);    
    routes.put('/:id', authSchemaUpdatePerson, PersonController.update);
    routes.delete('/:id', PersonController.delete);

    //rota de autendicação
    // router.post('/authenticate', async (req, res) => {
    //     const { email, password } = req.body;
    //     const user = await User.findOne({ email })
    // });


    server.use(prefix, routes);
};

