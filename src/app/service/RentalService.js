const RentalRepository = require('../repository/RentalRespository');
const validarCnpj = require('../../utils/validaCnpj');
const axios = require('axios').default;

class RentalService {
  async create(payload) {
    for (let values = 0; values < payload.address.length; values++) {
      const busca = payload.address;
      const campo = busca[values];
      const response = await axios.get(`https://viacep.com.br/ws/${payload.address[values].zipCode}/json`);
      const { cep, logradouro, complemento, bairro, localidade, uf } = response.data;
      (campo.zipCode = cep),
        (campo.street = logradouro),
        (campo.complement = complemento),
        (campo.district = bairro),
        (campo.city = localidade),
        (campo.state = uf);
    }

    if (payload.cnpj) {
      if (!validarCnpj(payload.cnpj)) {
        throw new Error('CNPJ invalid');
      }
    }

    const result = await RentalRepository.create(payload);
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
    for (let values = 0; values < body.address.length; values++) {
      const busca = body.address;
      const campo = busca[values];
      const response = await axios.get(`https://viacep.com.br/ws/${body.address[values].zipCode}/json`);
      const { cep, logradouro, complemento, bairro, localidade, uf } = response.data;
      (campo.zipCode = cep),
        (campo.street = logradouro),
        (campo.complement = complemento),
        (campo.district = bairro),
        (campo.city = localidade),
        (campo.state = uf);
    }

    const result = await RentalRepository.update(id, body);
    return result;
  }

  async delete(payload) {
    const result = await RentalRepository.delete(payload);
    return result;
  }
}

module.exports = new RentalService();
