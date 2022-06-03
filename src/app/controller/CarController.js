const CarService = require('../repository/CarRepository')
class CarController {    
    creat(req, res) {
        try {
            const result = CarService.create(req.body) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);            
        }
    }
}

module.exports = new CarController();