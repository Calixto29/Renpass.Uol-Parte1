const joi = require("@hapi/joi");
const moment = require("moment");
const Person = require("../app/schema/PersonSchema");
const validaCpf = require('../middleware/validaCpf');

const authSchemaPerson = joi.object({
	name: joi.string().min(6).required(),
	cpf: joi.string().required().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
	birthDay: joi.string().required(),
	email: joi.string().email().lowercase().required(),
	password: joi.string().min(6).required(),
	canDrive: joi.string().valid().required("yes" , "no")
});

module.exports = async (req, res, next) => {
	try {
		const reqBody = req.body;

		const { email } = req.body;	
		
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");

		const birthDayValidate = moment().diff(birthDay, "years", false) < 18;		

		if (await Person.findOne( { email }))
			return res.status(400).send( { error: 'email already exists'}); 			

		if (birthDayValidate) {
			return res.status(400).json({ message: "age must be over 18" });			
		}
		
		if (!validaCpf(reqBody.cpf)) {
			return res.status(400).json({ error: "CPF is invalid" })
		}		

		if (req.method == "POST") {
			await authSchemaPerson.validateAsync({
				...reqBody, birthDay

			})
		}						


	const { error } = await authSchemaPerson.validate(req.body, { abortEarly: true})
	if (error) throw error
	return next()
	} catch (error) {
		return res.status(400).json({Error: error})
	}
}
