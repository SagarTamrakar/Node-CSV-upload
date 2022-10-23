/*
    1. I was facing some issue due to replica set in local machine while using transaction 
       and that's why i have not used transaction. 
    2. There was some data which was not available and that case is not handled in this project.
    3. I have included "primary" property in carrier collection which(primary field) is empty for every entry in 
       data-sheet and therefore that is not being reflected in DB. 
    4. Data validation is not done in this project at schema level.
*/
const csv = require('csvtojson')
const async = require('async');
const User = require('../models/User');
const UserAccount = require('../models/UserAccount');
const Policy = require('../models/Policy');
const Carrier = require('../models/Carrier');
const Agent = require('../models/Agent');
const LOB = require('../models/LOB');

const upload = async (req, res) => {
    var users = [];
    var policies = [];
    var userAccounts = [];
    var agents = [];
    var lobs = [];
    var carriers = [];
    // const session = await mongoose.connection.startSession();                                   
    try {    
        await async.series([
            async function(){
                const data = await csv().fromFile("./public/data-sheet.csv")
                data.forEach((row,index) => {
                    users.push({
                        userType: row.userType,
                        email: row.email,
                        firstName: row.firstname,
                        gender: row.gender,
                        dob: row.dob,
                        phone: row.phone,
                        address: row.address,
                        state: row.state,
                        city: row.city,
                        zip: row.zip
                    })
                    policies.push({
                        policyMode: row.policy_mode,
                        policyNumber: row.policy_number,
                        policyType: row.policy_type,
                        premiumAmountWritten: row.premium_amount_written,
                        premiumAmount: row.premium_amount,
                        producer: row.producer,
                        policyStartDate: row.policy_start_date,
                        policyEndDate: row.policy_end_date
                    })
                    userAccounts.push({
                        accountName: row.account_name,
                        accountType: row.account_type,
                        applicationId: row['Applicant ID']
                    })
                    agents.push({
                        agent: row.agent,
                        agencyId: row.agency_id
                    }),
                    lobs.push({
                        companyName: row.company_name,
                        categoryName: row.category_name,
                        hasActiveClientPolicy: row['hasActive ClientPolicy']
                    })
                    carriers.push({
                        primary: row.primary
                    })
                })    
            },
            async function () {
                // await session.withTransaction(async () => {             
                        await User.insertMany(users);
                        await UserAccount.insertMany(userAccounts);
                        await Policy.insertMany(policies);
                        // await Carrier.insertMany(carriers, { session });
                        await Agent.insertMany(agents);
                        await LOB.insertMany(lobs);   
                    // });
                    // await session.commitTransaction();
                }     
        ], 
        // function(err, result){
        //     if(err){
        //         console.log("Some error occured", err.message, err)
        //     }else{
        //         console.log('Success!');
        //         res.send("File read and uploaded successfully.")
        //     }
        // }
        )
        // await session.endSession()
        res.send("File read and uploaded successfully.")
    }catch (err){
        console.log("Error Occured",err.mesage, err);
    }    
}

module.exports = upload