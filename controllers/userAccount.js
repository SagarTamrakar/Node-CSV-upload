const UserAccount = require("../models/UserAccount");

const createUserAccount = async(req, res) => { 
    const { accountName, 
            accountType, 
            applicationId
            } = req.body
    // Validate req body here.        
    try {
        const userAccount = await UserAccount.create({ 
            accountName, 
            accountType, 
            applicationId
            });
        if(userAccount){
            res.send(userAccount);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(400).send('something went wrong');
    }   
};

const getUserAccount = async (req, res) => {
    try {
        const { _id } = req.params
        if(_id){
            const userAccount = await UserAccount.findById(_id);
            res.send(userAccount);
        }else{
            res.sendStatus(400).send("Parameter is missing");
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(400).send("User Account not found");
    }
}

const updateUserAccount = async (req, res) => {
    try {
        if(req.params._id){
            const userAccount = await UserAccount.findByIdAndUpdate({_id: req.params._id},req.body);
            if(userAccount){
                res.send(userAccount);
            }else{
                res.send("User Account does not exists");   
            }
        }else{
            res.send("Wrong Inputs");
        }
        
    } catch (error) {
        console.log(error);
        res.send(error.messsage)
    }
}

const deleteUserAccount = async (req, res) => {
    try {
        if(req.params._id){
            let userAccount = await UserAccount.findByIdAndDelete(req.params._id);
            userAccount ? 
                res.send(`User Account(${userAccount.accountName}) has been deleted successfully.`)
                : res.send(`User Account does not exist or already deleted.`);
        }     
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}
module.exports = {createUserAccount, getUserAccount, updateUserAccount, deleteUserAccount};