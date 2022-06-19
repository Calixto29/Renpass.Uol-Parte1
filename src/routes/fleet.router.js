const FleetController = require('../app/controller/FleetController');

module.exports = (server, routes) => { 
    routes.post('/api/v1/rental/:id/car', FleetController.create);
    routes.get('/api/v1/rental/:id/fleet', FleetController.listFleet);
    routes.get('/api/v1/rental/:id/fleet/:id', FleetController.listFleetId);    
    routes.put('/api/v1/rental/:id/fleet/:id', FleetController.putFleet);
    routes.delete('/api/v1/rental/:id/fleet/:id', FleetController.deleteFleet);
    
    server.use(routes);
};
