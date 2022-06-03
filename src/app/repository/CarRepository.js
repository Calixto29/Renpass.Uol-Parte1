const CarSchema = require('../schema/CarSchema') 
class CarRepository {
    async create(payload) {
        return await CarSchema.create(payload); //Schema pct mongoose
    }
}

module.exports = new CarRepository();