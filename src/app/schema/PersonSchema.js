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
        //select: false (faz com que o password do usuario não venho junto com os dados da pesquisa)

    },
    candrive: {
        type: String,
        required: true,
        enum: ["yes", "no"]
    } 
});

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;