const passwordValidator = require('password-validator')
const bcrypt = require("bcrypt")
const User = require("../models/User")

// Create a schema
const schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have at least 1 uppercase letter
    .has().lowercase()                              // Must have at least 1 lowercase letter
    .has().digits(1)                                // Must have at least 1 digit
    .has().symbols(1)                               // Must have at least 1 special character
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

async function createRecord(req, res) {

    if (schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 12, async (error, hash) => {
            if (error) {
                console.log(error);
                res.status(500).send({
                    status: "Fail",
                    reason: "Internal Server Error While Creating Hash Password"
                })

            } else {
                try {
                    let data = new User(req.body)
                    data.password = hash
                    await data.save()
                    res.send({
                        status: "Done",
                        data: data
                    })
                } catch (error) {
                    let errorMessage = {}
                    if (error.keyValue) {
                        error.keyValue.username ? errorMessage.username = "Username Already Taken" : ''
                        error.keyValue.email ? errorMessage.email = "Email Address Already Taken" : ''
                    }
                    else
                        errorMessage = Object.fromEntries(Object.keys(error.errors).map(key => [key, error.errors[key].message]))

                    res.status(400).send({
                        status: "Fail",
                        reason: errorMessage
                    })
                }
            }
        })

    }
    else {
        res.status(400).send({
            status: "Fail",
            reason: schema.validate(req.body.password, { details: true }).map(x => x.message.replaceAll("string", "Password"))
        })
    }
}
async function getAllRecord(req,res){
     try {
        let data=await User.find().sort({_id:-1})
        res.send({
            status:"Done",
            data:data
        })
     } catch (error) {
        console.log(error);

        res.status(500).send({
            status:"Fail",
            reason:"Internal Server Error"
        })
        
     }
}


module.exports = {
    createRecord: createRecord,
    getAllRecord:getAllRecord
}