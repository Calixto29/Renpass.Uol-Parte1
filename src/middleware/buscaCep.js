const { response } = require('../app');
const axios = require('axios').default;

const cep = payload.address
async function buscaCep(cep) {        
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json` );
    console.log(response);
    return {
        zipCode: response.data.cep,
        street: response.data.lagradouro, 
        complement: response.data.complemento,
        district: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf        
    }   
} 

buscaCep(cep);

module.exports = buscaCep

