const bcrypt = require('bcryptjs');
const PersonRepository = require('../repository/PersonRepository');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');



class AuthService {
    async personAuthenticate(email, password) {
        const person =  await PersonRepository.personAuthenticate(email);

        if(!person) throw new Error('Email not found!');

        const personValidation = await bcrypt.compare(password, person.password)
        if (!personValidation) {
            throw new Error ("Password notfound") 
        } 
  
        person.password = undefined;

        const token = jwt.sign({id: person.id},
            authConfig.secret, {
                expiresIn: 86400,
            });

            return { token, email: person.email, canDrive: person.canDrive};
        
    }
}
module.exports = new AuthService();