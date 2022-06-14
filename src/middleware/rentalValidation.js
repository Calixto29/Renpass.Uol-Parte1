const joi = require("@hapi/joi");
const string = require("@hapi/joi/lib/types/string");
// const moment = require("moment");
const Rental = require("../app/schema/RentalSchema");
const validarCNPJ = require("../middleware/validaCnpj")


const authSchemaRental = joi.object({
	name: joi.string().min(6).required(),
	cnpj: joi.string().required().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
    activities: joi.string().required,
    address: joi.array().items(joi.object({
		zipCode: joi.string(),
		number: joi.string(),
		city: joi.string(),
		state: joi.string(),
		isFilial: joi.boolean().required("true" , "false")
})),
	
});

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;	

		if (!validarCNPJ(reqBody.cnpj)) {
			return res.status(400).json({ error: "CNPJ is invalid" })
		}	

	const { error } = await authSchemaRental.validate(req.body, { abortEarly: true});
	if (error) throw error
	return next()
	} catch (error) {		
		return res.status(400).json({Error: error});
	}
}
