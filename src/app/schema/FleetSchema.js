const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const FleetSchema = new mongoose.Schema({
	id_car: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Car",
		required: true
	},		
	id_rental: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Rental",
		required: true
	},	
	status: {
		type: String,
		required: true
	},
    daily_value: {
		type: String,
		required: true
	},
    plate: {
		type: String,
		required: true
	}
},
{ timestamps: false, versionKey: false}
);

FleetSchema.plugin(mongoosePaginate);

const Fleet = mongoose.model("Fleet", FleetSchema);

module.exports = Fleet;