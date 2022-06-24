const CarSchema = require('../app/schema/CarSchema');

function IdCarValidation(payload) {
	if (CarSchema.findById(payload) == payload)
	next()	
}


module.exports = IdCarValidation