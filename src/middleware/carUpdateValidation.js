const joi = require("@hapi/joi");

module.exports = async (req, res, next) => {
	try {
		const authSchemaCar = joi.object({
			model: joi.string().min(6),
			type: joi.string(),
			brand: joi.string(),
			color: joi.string().email().lowercase(),
			year: joi.string().min(6),
			accessories: joi.string()
		});	

	const { error } = await authSchemaCar.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}