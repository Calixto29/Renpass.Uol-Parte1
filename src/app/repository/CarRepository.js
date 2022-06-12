const CarSchema = require('../schema/CarSchema') 
class CarRepository {
    async create(payload) {
        return await CarSchema.create(payload); //Schema pct mongoose
    }
    async listCar(payload) {        
        const {page, perPage} = payload;        
        
        const allPage = {
            totalocs: 'total',
            docs: 'Cars',
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
        return CarSchema.paginate(payload, options);
    }
    async listCarId(payload) {
        return await CarSchema.findById(payload);
    }
    async putCar(id, body) {
        return await CarSchema.findByIdAndUpdate(id, body);
    }
    async deleteCar(id, body) {
        return await CarSchema.findByIdAndDelete(id, body);
        
    }
}

module.exports = new CarRepository();