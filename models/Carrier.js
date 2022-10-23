var mongoose  =  require('mongoose');  
   
var CarrierSchema = new mongoose.Schema({  
    primary: {
        type: String
    }
});  
   
module.exports = mongoose.model('Carrier', CarrierSchema);