const ReserveRepository = require ("../repository/ReserveRepository");
const RentalRepository = require("../repository/RentalRespository");
const ErrorIdRentalNotFound = require("../../errors/idRentalNotFound");
const ErrorCanDrive = require("../../errors/errorCandrive");
const ErrorIdCarNotFound = require("../../errors/idCarNotFound");
const ErrorIdPersonNotFound = require("../../errors/idPersonNotFound");
const PersonRepository = require("../repository/PersonRepository");
const CarRepository = require("../repository/CarRepository");


class ReserveService {

    async create(payload) {
        const { id_user } = payload;
        const person = await PersonRepository.listId(id_user);
        if (!person) {
            throw new ErrorIdPersonNotFound
        }
        if (person.canDrive == "no") {
            throw new ErrorCanDrive
        }

        const { id_car } = payload;
        const car = await CarRepository.listCarId(id_car);
        if (!car) {
            throw new ErrorIdCarNotFound("Car");
        }

        const { id_rental } = payload;
        const rental = await RentalRepository.listId(id_rental);
        if (!rental) {
            throw new ErrorIdRentalNotFound("Rental");
        }        

        return ReserveRepository.create(payload)                    
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
        
        const person = await PersonRepository.updatePersonId(body.id_user);
        if (!person) {
            throw new ErrorIdPersonNotFound
        }
        if (person.canDrive == "no") {
            throw new ErrorCanDrive
        }

        const car = await CarRepository.putCar(body.id_car);        
        if (!car) {
            throw new ErrorIdCarNotFound("Car");
        }

        const rental = await RentalRepository.update(body.id_car);
        if (!rental) {
            throw new ErrorIdRentalNotFound("Rental");
        } 

        return ReserveRepository.updateReserveId (id, body);         
    }

    async deleteReserve(id, body) {
        const result = await ReserveRepository.deleteReserve(id, body); 
        return result;        
    }    
}

module.exports = new ReserveService();