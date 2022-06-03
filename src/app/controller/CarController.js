const CarService = require('../repository/CarRepository')
class CarController {    
    async create(req, res) {
        try {
            const result = await CarService.create(req.body) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);            
        }
    } 
    async list(req, res) {
        const peyload = req.query
        try {
            const result = await CarService.list(peyload) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);            
        }
    }
    
}

module.exports = new CarController();