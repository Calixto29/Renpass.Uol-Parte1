const RentalController = require('../app/controller/RentalController');
const rentalValidation = require('../middleware/rentalValidation');

module.exports = (server, routes, prefix ='/api/v1/rental') => {
    routes.post('/', RentalController.create);
    routes.get('/', RentalController.listRental);
    routes.get('/:id', RentalController.listId);    
    routes.put('/:id', RentalController.update);
    routes.delete('/:id', RentalController.delete);
    
    server.use(prefix, routes);
};