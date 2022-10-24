const User = require("../models/User");

const createUser = async(req, res) => { 
    const { userType, 
            email, 
            firstName,
            gender,
            dob, 
            phone,
            address, 
            state, 
            city, 
            zip 
            } = req.body
    // Validate req body here.        
    try {
        console.log(
            "body", req.body
        );
        const user = await User.create(req.body);
        if(user){
            res.send(user);
        }
    } catch (error) {
        console.log(error.msg, error);
        res.sendStatus(400).send('something went wrong');
    }   
};

const getUser = async (req, res) => {
    try {
        const _id = req.params._id
        if(_id){
            const user = await User.findById(_id);
            res.send(user);
        }else{
            res.sendStatus(400).send("Parameter is missing");
        }
    } catch (error) {
        res.sendStatus(400).send("User not found");
    }
}

const updateUser = async (req, res) => {
    try {
        if(req.params._id){
            const user = await User.findByIdAndUpdate({_id: req.params._id},req.body);
            if(user){
                res.send(user);
            }else{
                res.send("User does not exists");   
            }
        }else{
            res.send("Wrong Inputs");
        }
        if (user){
            res.send(user);
        }else{
            res.send("User does not exists");
        }
        
    } catch (error) {
        res.send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        if(req.params._id){
            let user = await User.findByIdAndDelete(req.params._id);
            user ? 
                res.send(`User(${user.email}) has been deleted successfully.`)
                : res.send(`User does not exists or already deleted.`);
        }     
    } catch (error) {
        res.send(error)
    }
}
module.exports = {createUser, getUser, updateUser, deleteUser};