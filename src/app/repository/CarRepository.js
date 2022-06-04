const CarSchema = require('../schema/CarSchema') 
class CarRepository {
    async create(payload) {
        return await CarSchema.create(payload); //Schema pct mongoose
    }
    async list(payload) {
        return await CarSchema.find(payload);
    }
    async listId(payload) {
        return await CarSchema.findById(payload);
    }
    async put(payload) {
        return await CarSchema.put(payload);
    }
    async delete(payload) {
        return await CarSchema.delete(payload);
    }
}

module.exports = new CarRepository();