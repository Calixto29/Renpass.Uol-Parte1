const RentalController = require('../app/controller/RentalController');
const authSchemaRental = require('../middleware/rentalValidation');
const authSchemaUpdateRental = require('../middleware/rentalUpdateValidation');

module.exports = (server, routes, prefix ='/api/v1/rental') => {
    routes.post('/', authSchemaRental, RentalController.create);
    routes.get('/', RentalController.listRental);
    routes.get('/:id', RentalController.listId);    
    routes.put('/:id', authSchemaUpdateRental, RentalController.update);
    routes.delete('/:id', RentalController.delete);
    
    server.use(prefix, routes);
};