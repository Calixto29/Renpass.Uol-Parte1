const number = require('@hapi/joi/lib/types/number');
const string = require('@hapi/joi/lib/types/string');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongoose = require ('mongoose');

const CarSchema = new mongoose.Schema({
    model: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	year: {
		type: Date,
		required: true
	},
	accessories:[{
		description: {
			type: String,
			required: true,			
		},
		// _id: false,
    }],
	passengersQtd: {
		type: Number,
		required: true
	},
},

{ timestamps: false, versionKey: false}

);

CarSchema.plugin(mongoosePaginate);
const Car = mongoose.model('Car', CarSchema);
module.exports = Car;