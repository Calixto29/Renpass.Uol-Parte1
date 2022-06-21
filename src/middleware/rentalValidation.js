const joi = require("@hapi/joi");


const authSchemaRental = joi.object({
	name: joi.string().required(),
	cnpj: joi.string().required().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
    activities: joi.string().min(5).required(),
    address: joi.array().items(joi.object({
		zipCode: joi.string(),
		number: joi.string(),
		city: joi.string(),
		state: joi.string(),
		isFilial: joi.boolean().required("true" , "false")
}))
	
});

module.exports = async (req, res, next) => {
	try {
				
		const { error } = await authSchemaRental.validate(req.body, { abortEarly: true});
		
		if (error) throw error;
		return next();

	} catch (error) {			
		return res.status(400).json({Error: error});
	};
};
