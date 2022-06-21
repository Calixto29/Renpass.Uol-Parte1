const PersonController = require('../app/controller/PersonController');
const authSchemaPerson = require('../middleware/personValidation');
const authSchemaUpdatePerson = require('../middleware/personUpdateValidation');

// const express = require('express');
const Person = require('../app/schema/PersonSchema');


module.exports = (server, routes, prefix ='/api/v1/person') => {

    routes.post('/', authSchemaPerson, PersonController.create);
    routes.get('/', PersonController.list);
    routes.get('/:id', PersonController.listId);    
    routes.put('/:id', authSchemaUpdatePerson, PersonController.update);
    routes.delete('/:id', PersonController.delete); 
    
    routes.post('/authenticate', async (req, res ) => {
        const { email, password } = req.body;
        const person = await Person.findOne({ email });
    });


    server.use(prefix, routes);
};

