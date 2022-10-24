const Policy = require("../models/Policy");

const createPolicy = async(req, res) => { 
    const { policyMode, 
            policyNumber, 
            policyStartDate,
            policyEndDate,
            premiumAmountWritten, 
            premiumAmount,
            policyType, 
            producer,  
            } = req.body
    // Validate req body here.        
    try {
        const policy = await Policy.create(req.body);
        if(policy){
            res.send(policy);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(400).send('something went wrong');
    }   
};

const getPolicy = async (req, res) => {
    try {
        const _id = req.params._id
        if(_id){
            const policy = await Policy.findById(_id);
            res.send(policy);
        }else{
            res.sendStatus(400).send("Parameter is missing");
        }
    } catch (error) {
        res.sendStatus(400).send("POlicy not found");
    }
}

const updatePolicy = async (req, res) => {
    try {
        if(req.params._id){
            const policy = await Policy.findByIdAndUpdate({_id: req.params._id},req.body);
            if(policy){
                res.send(policy);
            }else{
                res.send("Policy does not exists");   
            }
        }else{
            res.send("Wrong Input");
        }
        
    } catch (error) {
        res.send(error)
    }
}

const deletePolicy = async (req, res) => {
    try {
        if(req.params._id){
            let policy = await Policy.findByIdAndDelete(req.params._id);
            policy ? 
                res.send(`Policy number(${policy.policyNumber}) has been deleted successfully.`)
                : res.send(`Policy does not exists or already deleted.`);
        }     
    } catch (error) {
        res.send(error)
    }
}
module.exports = {createPolicy, getPolicy, updatePolicy, deletePolicy};