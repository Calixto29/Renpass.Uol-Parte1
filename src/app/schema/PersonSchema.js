const mongoose = require ('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,        
    },
    cpf: {
         type: String,
         required: true,
         unique: true
    },
    birthDay: {
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
    canDrive: {
        type: String,
        required: true
    } //acessórios
});

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;