const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    return await RentalSchema.create(payload);
  }

  async listRental(payload) {
    const { page, perPage } = payload;

    const allPage = {
      totalocs: 'total',
      docs: 'Rentals',
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
    return RentalSchema.paginate(payload, options);
  }

  async listId(payload) {
    return await RentalSchema.findById(payload);
  }

  async update(id, body) {
    return RentalSchema.findByIdAndUpdate(id, body);
  }

  async delete(id, body) {
    return RentalSchema.findByIdAndDelete(id, body);
  }
}

module.exports = new RentalRepository();
