const ReserveRepository = require ("../repository/ReserveRepository");
class ReserveService{

    async create(payload) { 
        const result = await ReserveRepository.create(payload);
        return result; 
    }
    async listReserve(payload) {
        const result = await ReserveRepository.listReserve(payload);
        return result;
    }
    async listId(payload) {
        const result = await ReserveRepository.listId(payload);
        return result;
    }
    async updateReserveId(id, body) {
        
        const result = await ReserveRepository.updateReserveId(id, body);
        return result;
    }
    async deleteReserve(id, body) {
        const result = await ReserveRepository.deleteReserve(id, body); 
        return result;        
    }    
}

module.exports = new ReserveService();