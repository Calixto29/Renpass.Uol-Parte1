const CarRepository = require('../repository/CarRepository')
class CarService{
    create(payload) { // payload = req.body
        const result = CarRepository.create(payload);
        return result; 
    }
}