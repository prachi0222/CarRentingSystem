const UserRouter = require("express").Router()
const {
        createRecord,
        getAllRecord,
        login
      } = require("../controllers/UserController")

UserRouter.get("/", getAllRecord)
UserRouter.post("/signup", createRecord)
UserRouter.post("/login",login)


module.exports = UserRouter