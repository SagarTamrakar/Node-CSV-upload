var mongoose  =  require('mongoose');  
   
var PolicySchema = new mongoose.Schema({  
    policyMode:{  
        type: Number,
    },
    policyNumber:{
        type: String,
    },
    policyStartDate:{
        type: String,
    },
    policyEndDate:{
        type: String,
    },
    premiumAmountWritten:{
        type: String,
    },
    premiumAmount: {
        type: Number,
    },
    policyType:{
        type: String,
    },
    producer: {
        type: String,
    }

});  
   
module.exports = mongoose.model('Policy', PolicySchema);