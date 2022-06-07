const joi = require("@hapi/joi");

module.exports = async (req, res, next) => {
	try {
		const authSchemaCar = joi.object({
			model: joi.string().min(6).required(),
			type: joi.string().required(),
			brand: joi.string().required(),
			color: joi.string().email().lowercase().required(),
			year: joi.string().min(6).required(),
			accessories: joi.string().required()
		});	

	const { error } = await authSchemaCar.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}
