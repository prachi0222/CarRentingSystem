const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User Name is Required"]
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
    role:{
        type:String,
        default:"User"
    },
    
    

})
const User=mongoose.model("User",UserSchema)

module.exports=User