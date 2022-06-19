const mongoose = require ('mongoose');
const joi = require("@hapi/joi");

const authSchemaReserve = joi.object({
	id_user: joi.mongoose.Schema.Types.ObjectId().required(),
	date_start: joi.string().required(),
    date_end: joi.string().required(),
    id_car: joi.mongoose.Schema.Types.ObjectId().required(),
    final_value: joi.string().required() 	
});

module.exports = async (req, res, next) => {
	try {			

	const { error } = await authSchemaReserve.validate(req.body, { abortEarly: true});

	if (error) throw error;
	return next();

	} catch (error) {		
		return res.status(400).json({Error: error});
	};
};
