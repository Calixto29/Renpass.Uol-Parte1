const joi = require("@hapi/joi");
const moment = require("moment");

const authSchemaPerson = joi.object({
	name: joi.string().min(6).required(),
	cpf: joi.string().required(),
	birthday: joi.string().required(),
	email: joi.string().email().lowercase().required(),
	password: joi.string().min(6).required(),
	candrive: joi.string().valid().required("yes" , "no")
});

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;
		
		const birthday = moment(reqBody.birthday, "DD/MM/YYYY").format("YYYY/MM/DD");

		const birthdayValidate = moment().diff(birthday, "years", false) >= 18

		if(birthdayValidate == false) {
			return res.status(400).json({
				message: "age must be over 18"
			})			
		}
		if(req.method == "POST") {
			await authSchemaUpdatePerson.validateAsync({
				...reqBody, birthday

			})
		}
			

	const { error } = await authSchemaPerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}
