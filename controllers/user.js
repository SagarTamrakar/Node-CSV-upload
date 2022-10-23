const User = require("../models/User");

const createUser = async(req, res) => { 
    const { userType, 
            email, 
            firstName,
            gender,
            dob, 
            phoneaddress, 
            state, 
            city, 
            zip 
            } = req.body
    // Validate req body here.        
    try {
        const user = await User.create(req.body);
        if(user){
            res.send(user);
        }
    } catch (error) {
        console.log(error.msg, error);
        res.sendStatus(400).send('something went wrong');
    }   
};
module.exports = createUser;