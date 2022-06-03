const PersonRepository = require ("../repository/PersonRepository")
class PersonService{
    create(payload) { // payload = req.body
        const result = PersonRepository.create(payload);
        return result; 
    }
}

module.exports = new PersonService();