const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix ='/api/v1/car') => { //prefix evita de criar várias rotas
    routes.post('/', CarController.create);
    routes.get('/', CarController.listCar);
    routes.get('/:id', CarController.listCarId);    
    routes.put('/:id', CarController.putCar);
    routes.delete('/:id', CarController.deleteCar)
    
    server.use(prefix, routes);
};



// controller -> retorna o erro
// service -> validações
// repository -> lança pro banco