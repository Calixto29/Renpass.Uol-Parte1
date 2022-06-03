const CarController = require('');

module.exports = (server, routes, prefix ='/api/v1/car') => { //prefix evita de criar várias rotas
    routes.post('/', CarController.create);

    routes.get('/teste', (req, res) => {
        res.json('teste')
    });
    server.use(prefix, routes);
};



// controller -> retorna o erro
// service -> validações
// repository -> lança pro banco