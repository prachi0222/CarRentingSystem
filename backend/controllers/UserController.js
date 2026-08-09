const passwordValidator = require('password-validator')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
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
async function getAllRecord(req, res) {
    try {
        let data = await User.find().sort({ _id: -1 })
        res.send({
            status: "Done",
            data: data
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            status: "Fail",
            reason: "Internal Server Error"
        })

    }
}
async function login(req, res) {
    try {
        let data = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        })
        // User not found
        if (!data) {
            return res.status(401).send({
                status: "Fail",
                reason: "Invalid Username or Password"
            });
        }
        // Check password
        let passwordMatch = await bcrypt.compare(
            req.body.password,
            data.password
        );

        // Password incorrect
        if (!passwordMatch) {
            return res.status(401).send({
                status: "Fail",
                reason: "Invalid Username or Password"
            });
        }

        // Create JWT token
        let token = jwt.sign(
            {
                data: {
                    id: data._id,
                    username: data.username,
                    email: data.email,
                    role: data.role
                }
            },
            process.env.JWT_SECRECT_KEY,
            {
                expiresIn: "1d"
            }
        );

        // Login successful
        res.send({
            status: "Done",
            message: "Login Successfully",
            token: token,
            data: {
                id: data._id,
                name: data.name,
                username: data.username,
                email: data.email,
                role: data.role
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            status: "Fail",
            reason: "Internal Server Error"
        });
    }

}

module.exports = {
    createRecord: createRecord,
    getAllRecord: getAllRecord,
    login:login
}