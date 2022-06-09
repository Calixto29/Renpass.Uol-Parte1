// const res = require('express/lib/response');
const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
    async create(payload) {
        return await PersonSchema.create(payload); 
    }
    async list(payload) {        
        const {page, perPage} = payload;        
        
        const allPage = {
            totalocs: 'total',
            docs: 'Persons',
            totalPages: 'offsets',
            nextPage: false,
            prevPage: false,
            pagingCounter: false,
            meta: false,
            hasPrevPage: false,
            hasNextPage: false
        };
        const options = {
            page: parseInt(page, 10) || 5,
            limit: parseInt(perPage, 10) || 10,
            offset: 1,
            customLabels: allPage
        };
        return PersonSchema.paginate(payload, options);
        // }
           
        // const personPages = await PersonSchema.paginate(payload, options, {});
        // return res.json(personPages);
        
        //     console.error(err);
        //     return res.status(500).send(err);
        // } 

        // return await PersonSchema.paginate({}, pages);  
        // // return await PersonSchema.paginate(options);
        // return res.json(personPage);

    }
    async listId(payload) {
        return await PersonSchema.findById(payload);
    }
    async updatePersonId(id, body) {           
        return PersonSchema.findByIdAndUpdate(id, body);
    }
    async deletePerson(id, body) {
        return PersonSchema.findByIdAndDelete(id, body);

    }
    
}


module.exports = new PersonRepository();