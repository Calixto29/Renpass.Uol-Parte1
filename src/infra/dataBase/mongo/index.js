const { config } = require('dotenv');
const mongoose = require('mongoose');
const conig = required('../../../config/config');

class Database{
    constructor() {
        this.connect();
    }
    connect() {
        return mongoose.connect(`mongodb://${config.database.host}/${config.database.collection}`),
        {
            user: config.database.username,
            pass: config.database.password,
        }
    }
}

module.exports = new Database().connect();