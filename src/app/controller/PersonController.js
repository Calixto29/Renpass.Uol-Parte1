const PersonService = require('../service/PersonService')
class  PersonController {    
    async create(req, res) {
        try {
            const result = await PersonService.create(req.body) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);
        }
    }
    async list(req, res) {
        const payload = req.query;
        try {
            const result = await PersonService.list(payload);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(400).json(error)
        }
    }
    async listId(req, res) {
        try {
            const result = await PersonService.listId(req.params.id);
            return res.status(200),json(result);        
        } catch(error)    {
            return res.status(400).json(error);
        }
    }
    async update(req, res) {
        try {
            const result = await PersonService.updatePerson(
                req.params.id,
                req.body
            );
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async delete(req, res) {
        try {
            const result = await PersonService.deletePerson(req.params.id);
            return res.status(200).json('successfully deleted');
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new PersonController();