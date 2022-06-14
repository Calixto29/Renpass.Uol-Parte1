// const { response } = require('../app');
const axios = require('axios').default;

class GetCep {
    static async buscaCep() {    
        const response = await axios.get(`https://viacep.com.br/ws/96203230/json`);        
        return {
            zipCode: response.data.cep,
            street: response.data.lagradouro, 
            complement: response.data.complemento,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf        
        }   
    }    
}


module.exports = GetCep

