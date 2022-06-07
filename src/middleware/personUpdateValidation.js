const joi = require("@hapi/joi");

module.exports = async (req, res, next) => {
	try {
		const authSchemaUpdatePerson = joi.object({
            name: joi.string().min(6),
			cpf: joi.string(),
			birthday: joi.string(),
			email: joi.string().email().lowercase(),
			password: joi.string().min(6),
			candrive: joi.string().valid("yes" , "no")
		});	

	const { error } = await authSchemaUpdatePerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}