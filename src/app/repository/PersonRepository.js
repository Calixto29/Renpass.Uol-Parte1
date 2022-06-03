const PersonSchema = require('../schema/PersonSchema') 
class PersonRepository {
    async create(payload) {
        return await PersonSchema.create(payload); //Schema pct mongoose
    }
}

module.exports = new PersonRepository();