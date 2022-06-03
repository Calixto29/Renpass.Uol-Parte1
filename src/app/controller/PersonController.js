const PersonService = require('../repository/PersonRepository')
class  PersonController {    
    creat(req, res) {
        try {
            const result = PersonService.create(req.body) //requisição e o corpo da req.
            return res.status(201).json(result);
        } catch(error) {
            return res.status(400).json(error);
        }
    }
}