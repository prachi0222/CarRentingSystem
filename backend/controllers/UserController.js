const User=require("../models/User")

async function createRecord(req,res){
   res.send("Hello server")
}

module.exports={
    createRecord: createRecord
}