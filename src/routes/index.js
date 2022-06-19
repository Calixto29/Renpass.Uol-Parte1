const { Router } = require("express");
const car = require('./car.router');
const person = require('./person.router');
const personAuthenticate = require('./auth.router');
const rental = require('./rental.router');
const document = require('./doc.route');
const reserve = require('./reserve.router');


module.exports = (server) => {
    server.use((req, res, next) => {
        person(server, new Router());  
        next();
    });

    server.use((req, res, next) => {
        car(server, new Router());
        next();        
    });

    server.use((req, res, next) => {
        personAuthenticate(server, new Router());
        next();        
    });

    server.use((req, res, next) => {
        rental(server, new Router());
        next(); 
    });

    server.use((req, res, next) => {
        document(server, new Router());
        next(); 
    });

    server.use((req, res, next) => {
        reserve(server, new Router());
        next(); 
    });
        
        
};
