const Car = require('../app/schema/CarSchema');

function iDCarValid(_id) {
	const validationIdCar = (request, response, next) => {
		const { id_car } = carSchema.validate(request.body)
		const valid = Car.findOne( { _id } == id_car )

		if (valid) {
			next();
		} else {
			return response.status(400).send({ error : 'ID não existe'})
		}
	}
}

module.exports = iDCarValid;