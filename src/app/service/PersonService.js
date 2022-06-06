const PersonRepository = require ("../repository/PersonRepository")
class PersonService{

    async create(payload) { // payload = req.body
        const result = await PersonRepository.create(payload);
        return result; 
    }
    async list(payload) {
        const result = await PersonRepository.list(payload);
        return result;
    }
    async listId(payload) {
        const result = await PersonRepository.listId(payload);
        return result;
    }
    async updatePersonId(id, body) {
        const result = await PersonRepository.updatePersonId(id, body);
    }
    async deletePersonId(id, body) {
        const result = await PersonRepository.deletePersonId(id, body);        
    }    
}

module.exports = new PersonService();