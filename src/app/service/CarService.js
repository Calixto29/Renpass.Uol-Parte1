const CarRepository = require('../repository/CarRepository')

class CarService{
    
    async create(payload) { // payload = req.body
        const result =  await CarRepository.create(payload);
        return result; 
    }

    async listCar (payload) {
        const result = await CarRepository.listCar(payload);
        return result;
    }

    async listCarId (payload) {
        const result = await CarRepository.listCarId(payload);
        return result;
    }

    async putCar (id, body) {
        const result = await CarRepository.putCar(id, body);
        return result;
    }
    
    async deleteCar (payload) {
        const result = await CarRepository.deleteCar(payload);
        return result;
    }


}

module.exports = new CarService();