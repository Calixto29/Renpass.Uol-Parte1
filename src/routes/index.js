const { Router } = require("express");
const Person = require("../app/schema/PersonSchema");
const car = require('./car.router');
const person = require('./person.router');

module.exports = (server) => {
    server.use((req, res, next) => {
        person(server, new Router());
        

        car(server, new Router());
        next();        
    })
}