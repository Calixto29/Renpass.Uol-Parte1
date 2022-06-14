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
		street : {
			type: String,
			required: false
		},
        complement : {
            type : String,
            required: false
			
        },
		district: {
			type: String,
			required: false
		},
		number: {
			type: String,
			required: false
		},
		city: {
			type: String,
			required: false
		},
		state: {
			type: String,
			required: false
		},
		isFilial: {
			type: Boolean,
			required: true
		}
    }],

},

{ timestamps: false, versionKey: false}

);

RentalSchema.plugin(mongoosePaginate);
const Rental = mongoose.model('Rental', RentalSchema);


module.exports = Rental;