const express =require("express")
require("dotenv").config()
require("./db-connection")

const Router=require("./routes/index")
const app=express()

app.use("/api",Router)

let port=process.env.PORT || 8000
app.listen(port,console.log(`Server is Running at ${process.env.PORT}`)
)