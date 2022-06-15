const joi = require("@hapi/joi");
const validarCnpj = require("../middleware/validaCnpj");

const authSchemaRental = joi.object({
	name: joi.string(),
	cnpj: joi.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
    activities: joi.string(),
    address: joi.array().items(joi.object({
		zipCode: joi.string(),
		number: joi.string(),
		city: joi.string(),
		state: joi.string(),
		isFilial: joi.boolean("true" , "false")
})),
	
});

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;	

		if (!validarCnpj (reqBody.cnpj)) {
			return res.status(400).json({ error: "CNPJ is invalid" });
		};	

	const { error } = await authSchemaRental.validate(req.body, { abortEarly: true});
	if (error) throw error
	return next();
	
	} catch (error) {		
		return res.status(400).json({Error: error});
	};
};
