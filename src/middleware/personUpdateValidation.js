const joi = require("@hapi/joi");

module.exports = async (req, res, next) => {
	try {
		const authSchemaUpdatePerson = joi.object({
            name: joi.string().min(6).required(),
			cpf: joi.string().required(),
			birthday: joi.string().required(),
			email: joi.string().email().lowercase().required(),
			password: joi.string().min(6).required(),
			candrive: joi.string().required("yes" , "no")
		});	

	const { error } = await authSchemaUpdatePerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}