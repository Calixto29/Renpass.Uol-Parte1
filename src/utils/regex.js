const joi = require('joi');

(cpf = joi.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)), (cnpj = joi.regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/));

module.exports = regex;
