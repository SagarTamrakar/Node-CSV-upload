var mongoose  =  require('mongoose');  
   
var LOBSchema = new mongoose.Schema({  
    companyName:{  
        type: String,
    },
    categoryName:{
        type: String,
    },
    hasActiveClientPolicy:{
        type: String,  
    }
});  
   
module.exports = mongoose.model('LOB', LOBSchema);