const number = require('@hapi/joi/lib/types/number');
const string = require('@hapi/joi/lib/types/string');
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
	accessories:[ {
		description: {
			type: String,
			required: true,
			unique: true
		},
        description: {
			type: String,
			required: true,
			unique: true
		},
        description: {
			type: String,
			required: true,
			unique: true
		},
        description: {
			type: String,
			required: true,
			unique: true
		},
        description: {
			type: String,
			required: true,
			unique: true
		},
    }
],
	passengersQtd: {
		type: Number,
		required: true
	},
    total: {
        type: number,
        required: true,
        unique: false
    },
    limit: {
        type: number,
        required: true,
        unique: false
    },
    offset: {
        type: number,
        required: true,
        unique: false
    },
    offsets: {
        type: number,
        required: true,
        unique: false
    }
},
{ timestamps: false, versionKey: false}
);

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;