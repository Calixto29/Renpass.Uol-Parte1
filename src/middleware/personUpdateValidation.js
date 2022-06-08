const joi = require("@hapi/joi");
const moment = require("moment");

const authSchemaUpdatePerson = joi.object({
	name: joi.string().min(6),
	cpf: joi.string(),
	birthDay: joi.string(),			
	email: joi.string().email().lowercase(),
	password: joi.string().min(6),
	canDrive: joi.string().valid("yes" , "no")
	});	

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;
		
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");

		const birthDayValidate = moment().diff(birthDay, "years", false) < 18

		if(birthDayValidate) {
			return res.status(400).json({
				message: "age must be over 18"
			})			
		}
		if(req.method == "PUT") {
			await authSchemaUpdatePerson.validateAsync({				
				...reqBody, birthDay
			})
		}


	const { error } = await authSchemaUpdatePerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error.message})
	}
}