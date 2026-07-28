const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User Name is Required"]
    },
    username:{
        type:String,
        required:[true,"Username is Required"]
    },

    email:{
        type:String,
        unique:true,
        required:[true,"User Email Address is Required"]
    },

    phone:{
        type:String,
        required:[true,"User Phone Number is Required"]
    },
    password:{
        type:String,
        required:[true,"User Password is Required"]
    },
    passwordReset:{
        otp:String,
        otpExpire:Date
    },
    role:{
        type:String,
        enum:["Customer","Admin"],
        default:"Customer"
    },
    status:{
        type:Boolean,
        default:true
    },
    
    

},
{timestamps:true})
const User=mongoose.model("User",UserSchema)

module.exports=User