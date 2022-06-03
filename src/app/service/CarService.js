const CarRepository = require('../repository/CarRepository')

class CarService{
    async create(payload) { // payload = req.body
        const result =  await CarRepository.create(payload);
        return result; 
    }

    async list (payload) {
        const result = await CarRepository.list(payload);
    }


}

module.exports = new CarService();