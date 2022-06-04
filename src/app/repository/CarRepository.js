const CarSchema = require('../schema/CarSchema') 
class CarRepository {
    async create(payload) {
        return await CarSchema.create(payload); //Schema pct mongoose
    }
    async listCar(payload) {
        return await CarSchema.find(payload);
    }
    async listCarId(payload) {
        return await CarSchema.findById(payload);
    }
    async putCar(payload) {
        return await CarSchema.putCar(payload);
    }
    async deleteCar(payload) {
        return await CarSchema.deleteCar(payload);
    }
}

module.exports = new CarRepository();