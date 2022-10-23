var mongoose  =  require('mongoose');  
   
var AgentSchema = new mongoose.Schema({  
    agent:{  
        type:String,
    },
    agencyId: {
        type: String
    }
});  
   
module.exports = mongoose.model('Agent', AgentSchema);