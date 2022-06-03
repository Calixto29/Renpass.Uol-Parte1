const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix ='/api/v1/car') => { //prefix evita de criar várias rotas
    routes.post('/', CarController.create);
    routes.get('/', CarController.list);
    // routes.get('/:id', CarController.getById);    
    // routes.put('/:id', CarController.update);
    // routes.delete('/:id', CarController.delete)
    server.use(prefix, routes);

    // routes.get('/teste', (req, res) => {
    //     res.json('teste')
    // });
    // server.use(prefix, routes);
};



// controller -> retorna o erro
// service -> validações
// repository -> lança pro banco