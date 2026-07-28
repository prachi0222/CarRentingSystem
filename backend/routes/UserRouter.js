const UserRouter = require("express").Router()
const {
        createRecord,
        getAllRecord
      } = require("../controllers/UserController")

UserRouter.get("/", getAllRecord)
UserRouter.post("/signup", createRecord)


module.exports = UserRouter