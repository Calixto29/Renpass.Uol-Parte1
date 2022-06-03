const CarSchema = require('../schema/CarSchema') 
class CarRepository {
    async create(payload) {
        return await CarSchema.create(payload); //Schema pct mongoose
    }
    async list(peyload) {
        return await CarSchema.find(peyload);
    }
}

module.exports = new CarRepository();