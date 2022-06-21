const mongoose = require ('mongoose');
const joi = require("@hapi/joi");
const Car = require('../app/schema/CarSchema')

const authSchemaReserve = joi.object({
	id_user: joi.string().required(),
	date_start: joi.string().required(),
    date_end: joi.string().required(),
    id_car: joi.string().required(),
	id_rental: joi.string().required(),
    final_value: joi.string().required() 	
});

module.exports = async (req, res, next) => {
	try {
		const { id_car } = req.body;
		
		if (await Car.findOne( { id_car } ) == null)
		return res.status(400).send({ error: 'ID Car não existe'})

		const { error } = await authSchemaReserve.validate(req.body, { abortEarly: true});

		if (error) throw error;
		return next();

	} catch (error) {		
		return res.status(400).json({Error: error});
	};
};
