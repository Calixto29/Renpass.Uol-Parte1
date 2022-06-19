const FleetSchema = require('../schema/FleetSchema'); 
class FleetRepository {
    async create(payload) {
        return await FleetSchema.create(payload); 
    }
    async listFleet(payload) {        
        const {page, perPage} = payload;        
        
        const allPage = {
            totalocs: 'total',
            docs: 'Fleet',
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
        return FleetSchema.paginate(payload, options);
    }
    async listFleetId(payload) {
        return await FleetSchema.findById(payload);
    }
    async putFleet(id, body) {
        return await FleetSchema.findByIdAndUpdate(id, body);
    }
    async deleteFleet(id, body) {
        return await FleetSchema.findByIdAndDelete(id, body);
        
    }
}

module.exports = new FleetRepository();