const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
  async create(payload) {
    return await PersonSchema.create(payload);
  }

  async list(payload) {
    const { page, perPage } = payload;

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
      offset: 0,
      customLabels: allPage
    };
    return PersonSchema.paginate(payload, options);
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

  async personAuthenticate(email) {
    return PersonSchema.findOne({ email }).select('+password');
  }
}

module.exports = new PersonRepository();
