const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = new mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	cnpj: {
		type: String,
		required: true,
        unique : true
	},
	activities: {
		type: String,
		required: true
	},
	address:[{
		zipCode: {
			type: String,
			required: true,			
		},
        number : {
            type : String,
            required: true
			
        },
		complement: {
			type: String,
			required: false
		},		
        isFilial : {
            type: String,
            required: true,
            enum: [ "true" , "false"]
        }		
    }]
},

{ timestamps: false, versionKey: false}

);

RentalSchema.plugin(mongoosePaginate);
const Rental = mongoose.model('Rental', RentalSchema);


module.exports = Rental;