const ReserveService = require('../service/ReserveService');

class  ReserveController {    
    async create(req, res) {        
        try {
            const {id_rental} = req.params;
            const reqBody = req.body;            
            const result = await ReserveService.create( { ...reqBody, id_rental: String(id_rental) } );            
            return res.status(201).json(result);
        } catch(error) {             
            return res.status(400).json(error);
        }
    }
    async listReserve(req, res) {
        const payload = req.query;

        try {
            const result = await ReserveService.listReserve(payload);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(400).json(error.message)
        }
    }
    async listId(req, res) {
        try { 
            
            const result = await ReserveService.listId(req.params.id);
            return res.status(200).json(result);        
        } catch(error)    {
            return res.status(400).json(error);
        }
    }
    async updateReserveId(req, res) {
        try {            
                       
            const result = await ReserveService.updateReserveId(
                req.params.id,
                req.body
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async deleteReserve(req, res) {
        try {
            const result = await ReserveService.deleteReserve(req.params.id);
            return res.status(204).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new ReserveController();