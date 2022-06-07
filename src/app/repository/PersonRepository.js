// const res = require('express/lib/response');
const PersonSchema = require('../schema/PersonSchema') 
class PersonRepository {
    async create(payload) {
        return await PersonSchema.create(payload); //Schema pct mongoose
    }
    async list(payload) {
        return await PersonSchema.find(payload);
    }
    async listId(payload) {
        return await PersonSchema.findById(payload)
    }
    async updatePersonId(id, body) {           
        return PersonSchema.findByIdAndUpdate(id, body)
    }
    async deletePerson(id, body) {
        return PersonSchema.findByIdAndDelete(id, body);

    }
    
}

module.exports = new PersonRepository();