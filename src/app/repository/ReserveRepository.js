const ReserveSchema = require('../schema/ReserveSchema');


class ReserveRepository {
    async create(payload) {
        return await ReserveSchema.create(payload); 
    }
    async listReserve(payload) {        
        const {page, perPage} = payload;        
        
        const allPage = {
            totalocs: 'total',
            docs: 'Reserve',
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
            offset: 0,
            customLabels: allPage
        };        
        return ReserveSchema.paginate(payload, options);        

    }
    async listId(payload) {
        return await ReserveSchema.findById(payload);
    }
    async updateReserveId(id, body) {           
        return ReserveSchema.findByIdAndUpdate(id, body);
    }
    async deleteReserve(id, body) {
        return ReserveSchema.findByIdAndDelete(id, body);
    }   
    
}


module.exports = new ReserveRepository();