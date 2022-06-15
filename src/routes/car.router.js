const CarController = require('../app/controller/CarController');
const carValidation = require('../middleware/carValidation');

module.exports = (server, routes, prefix ='/api/v1/car') => { 
    routes.post('/', carValidation, CarController.create);
    routes.get('/', CarController.listCar);
    routes.get('/:id', CarController.listCarId);    
    routes.put('/:id', CarController.putCar);
    routes.delete('/:id', CarController.deleteCar);
    
    server.use(prefix, routes);
};
