//const { config } = require('dotenv');
const mongoose = require('mongoose');
const config = require('../../../config/config');

class DataBase{
    constructor() {
        this.connect();
    }
    connect() {
        return mongoose.connect(`mongodb+srv://Fernando:2913@desafio-runpass.uu4qmsf.mongodb.net/?retryWrites=true&w=majority`)
         
    }
}

module.exports = new DataBase().connect();