const joi = require("@hapi/joi");

const authSchemaCar = joi.object({
	model: joi.string().min(6),
	type: joi.string(),
	brand: joi.string(),
	color: joi.string(),
	year: joi.string(),
	accessories: joi.array().min(1).unique()
	.items({description:
		joi.string()
		.min(1)
		.trim()
		}),
	passengersQtd: joi.number().min(1)
});	

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;
		
		const year = reqBody.year;

		if (year < 1950 ) {
			return res.status(400).json({
				message: "Year must be greater than 1950"
			});

		} else if (year > 2022) {
			return res.status(400).json({
				message: "Year cannot be longer than 2022"
			});
		};
		
		if(req.method == "PUT") {
			await authSchemaCar.validateAsync({
				...reqBody, year

			});
		};

	const { error } = await authSchemaCar.validate(req.body, { abortEarly: true});
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error});
	};
};