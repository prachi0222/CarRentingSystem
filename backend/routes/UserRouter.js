const UserRouter=require("express").Router()
const{
  createRecord
}=require("../controllers/UserController")

UserRouter.post("",createRecord)

module.exports=UserRouter