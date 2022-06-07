const mongoose = require ('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
    cpf: {
         type: String,
         required: true,
         unique: true
    },
    birthday: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    candrive: {
        type: String,
        required: true
    } //acessórios
});

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;