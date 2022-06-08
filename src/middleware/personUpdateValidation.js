const joi = require("@hapi/joi");
const moment = require("moment");

const authSchemaUpdatePerson = joi.object({
	name: joi.string().min(6),
	cpf: joi.string(),
	birthday: joi.string(),			
	email: joi.string().email().lowercase(),
	password: joi.string().min(6),
	candrive: joi.string().valid("yes" , "no")
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
		if(req.method == "PUT") {
			await authSchemaUpdatePerson.validateAsync({				
				...reqBody, birthday
			})
		}


	const { error } = await authSchemaUpdatePerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}