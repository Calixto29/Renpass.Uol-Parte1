const RentalRepository = require('../repository/RentalRespository');


class RentalService{

    async create(payload) {         
        const result = await RentalRepository.create(payload, );
        return result; 
    }
    async listRental(payload) {
        const result = await RentalRepository.listRental(payload);
        return result;
    }
    async listId(payload) {
        const result = await RentalRepository.listId(payload);
        return result;
    }
    async update(id, body) {
        
        const result = await RentalRepository.update(id, body);
        return result;
    }
    async delete(payload) {
        const result = await RentalRepository.delete(payload); 
        return result;        
    }    
}

module.exports = new RentalService();