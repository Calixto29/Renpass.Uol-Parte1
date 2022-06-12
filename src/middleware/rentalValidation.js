const joi = require("@hapi/joi");
const moment = require("moment");
const Rental = require("../app/schema/RentalSchema");

const authSchemaRental = joi.object({
	name: joi.string().min(6).required(),
	cnpj: joi.string().required(),
    activities: joi.string().required,
    address: joi.array().required()
	.items({
    zipCode: joi.string().required(),
    number: joi.string().required,
    isFilial: joi.string().valid().required("true" , "false")
}),
	
});

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;
		
		const year = reqBody.year;
		

		if (year < 1950 ) {
			return res.status(400).json({
				message: "Year must be greater than 1950"
			})

		} else if (year > 2022) {
			return res.status(400).json({
				message: "Year cannot be longer than 2022"
			})
		}

		if(req.method == "POST") {
			await authSchemaRental.validateAsync({
				...reqBody, year

			})
		}


		

	const { error } = await authSchemaCar.validate(req.body, { abortEarly: true});
	if (error) throw error
	return next()
	} catch (error) {		
		return res.status(400).json({Error: error});
	}
}
