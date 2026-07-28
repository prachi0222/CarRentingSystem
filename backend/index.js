const express =require("express")
require("dotenv").config()
require("./db-connection")

const Router=require("./routes/index")
const cors = require("cors");
const app=express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use("/api",Router)

let port=process.env.PORT || 8000
app.listen(port,console.log(`Server is Running at ${process.env.PORT}`)
)