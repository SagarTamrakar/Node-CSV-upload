var mongoose  =  require('mongoose');  
   
var UserSchema = new mongoose.Schema({  
    userType:{  
        type: String,
    },
    email:{
        type: String,
    },
    firstName:{
        type: String
    },
    gender: {
        type: String,
    },
    dob:{
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: String,
    },

});  
   
module.exports = mongoose.model('User', UserSchema);