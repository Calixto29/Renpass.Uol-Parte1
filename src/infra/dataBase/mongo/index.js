//const { config } = require('dotenv');
const mongoose = require('mongoose');
const config = require('../../../config/config');

class DataBase{
    constructor() {
        this.connect();
    }
    connect() {
        return mongoose.connect(`mongodb://${config.database.host}/${config.database.collection}`, {
            user: config.database.username,
            pass: config.database.password
        },
        ) 
    }
}

module.exports = new DataBase().connect();