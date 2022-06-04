const CarRepository = require('../repository/CarRepository')

class CarService{
    async create(payload) { // payload = req.body
        const result =  await CarRepository.create(payload);
        return result; 
    }

    async list (payload) {
        const result = await CarRepository.list(payload);
    }

    async listId (payload) {
        const result = await CarRepository.listId(payload);
    }

    async put (payload) {
        const result = await CarRepository.put(payload);
    }
    
    async delete (payload) {
        const result = await CarRepository.delete(payload);
    }


}

module.exports = new CarService();