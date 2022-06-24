const joi = require("joi");

const authSchemaCar = joi.object({
	model: joi.string().min(6).required(),
	type: joi.string().required(),
	brand: joi.string().required(),
	color: joi.string().required(),
	year: joi.string().required(),
	accessories: joi.array().min(1).unique().required()
	.items({description:
		joi.string()
		.min(1)
		.trim()
		.required()}),
	passengersQtd: joi.number().min(1).required()
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

		if(req.method == "POST") {
			await authSchemaCar.validateAsync({
				...reqBody, year

			});
		};


		

	const { error } = await authSchemaCar.validate(req.body, { abortEarly: true});
	if (error) throw error
	return next();

	} catch (error) {
		return res.status(400).json({Error: error});
	};
};
