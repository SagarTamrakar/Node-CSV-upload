var mongoose  =  require('mongoose');  
   
var UserAccountSchema = new mongoose.Schema({ 
    accountName: {
        type: String
    }, 
    accountType:{  
        type: String,
        enum: ["Personal", "Commercial"],
        default: "Personal"  
    },
    applicationId: {
        type: String
    }

});  
   
module.exports = mongoose.model('UserAccount', UserAccountSchema);