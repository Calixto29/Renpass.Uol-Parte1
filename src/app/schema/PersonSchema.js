const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
        //select: false (faz com que o password do usuario não venho junto com os dados da pesquisa)

    },
    canDrive: {
        type: String,
        required: true,
        enum: ["yes", "no"]
    } 
});

PersonSchema.plugin(mongoosePaginate);
const Person = mongoose.model('Person', PersonSchema)


module.exports = Person;