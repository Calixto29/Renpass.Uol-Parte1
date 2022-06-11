// const bcrypt = require('bcryptjs')
const AuthService = require('../service/AuthService');

class AuthController {

    async personAuthenticate(req, res) {
        try {
            const { email, password } = req.body;      
                  
            const result = await AuthService.personAuthenticate(email, password);
            return res.status(201).json(result);

        } catch (error) {                        
            return res.status(404).json("Invalid email or password");            
        }
    }
}

module.exports = new AuthController();