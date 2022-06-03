const PersonService = require('../repository/PersonRepository')
class  PersonController {    
    async create(req, res) {
        try {
            const result = await PersonService.create(req.body) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new PersonController();