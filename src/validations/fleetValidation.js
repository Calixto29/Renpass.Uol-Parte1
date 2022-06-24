const joi = require("joi");
const Fleet = require("../app/schema/FleetSchema");

const authSchemaFleet = joi.object({

	id_car: joi.string().required(),
	id_rental: joi.string().required(),
    status: joi.string().valid("available", "unvailable", "rented").required(),
    daily_value: joi.string().min(10).required()        	
    
});

module.exports = async (req, res, next) => {
	try {

        const reqBody = req.body;

        const { plate } = req.body;	
        
        if (await Fleet.findOne( { plate }))
			return res.status(400).send( { 
                error: `License plate ${plate} is already registered in another vehicle`});
        
        if (req.method == "POST") {
			await authSchemaFleet.validateAsync({
				...reqBody, plate

			});
		};
        
    const { error } = await authSchemaFleet.validate(req.body, { abortEarly: true});
    if (error) throw error;
    return next();
	} catch (error) {		
		return res.status(400).json({Error: error});
	};
};
