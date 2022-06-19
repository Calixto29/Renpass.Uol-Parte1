const ReserveController = require('../app/controller/ReserveController');

module.exports = (server, routes, prefix ='/api/v1/rental/:id_rental/reserve') => {
    routes.post('/', ReserveController.create);
    routes.get('/', ReserveController.listReserve);
    routes.get('/:id', ReserveController.listId);    
    routes.put('/:id', ReserveController.updateReserveId);
    routes.delete('/:id', ReserveController.deleteReserve);
    
    server.use(prefix, routes);
};