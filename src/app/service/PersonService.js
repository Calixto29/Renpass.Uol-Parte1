const PersonRepository = require ("../repository/PersonRepository")
class PersonService{

    async create(payload) { 
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
        // console.log(req.params)
        const result = await PersonRepository.updatePersonId(id, body);
        return result;
    }
    async deletePerson(payload) {
        const result = await PersonRepository.deletePerson(payload); 
        return result;        
    }    
}

module.exports = new PersonService();