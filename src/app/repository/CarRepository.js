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
    async putCar(id, body) {
        return await CarSchema.findByIdAndUpdate(id, body);
    }
    async deleteCar(id, body) {
        return await CarSchema.findByIdAndDelete(id, body);
        
    }
}

module.exports = new CarRepository();