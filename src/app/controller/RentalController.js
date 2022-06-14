const RentalService = require('../service/RentalService');

class  RentalController {    
    async create(req, res) {
        try {
            const result = await RentalService.create(req.body);
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error.message);
        }
    }
    async listRental(req, res) {
        const payload = req.query;

        try {
            const result = await RentalService.listRental(payload);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(400).json(error.message)
        }
    }
    async listId(req, res) {
        try { 
            
            const result = await RentalService.listId(req.params.id);
            return res.status(200).json(result);        
        } catch(error)    {
            return res.status(400).json(error);
        }
    }
    async update(req, res) {
        try {            
                       
            const result = await RentalService.update(
                req.params.id,
                req.body
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async delete(req, res) {
        try {
            const result = await RentalService.delete(req.params.id);
            return res.status(200).json('successfull deleted');
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new RentalController();