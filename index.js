require("dotenv").config()
var express=require("express")
const ConnectToDataBase = require("./DataBase/DB")
const app=express()
var Route=require("./Routes/Auth-Route")
//connect to data base

ConnectToDataBase()

// added Middle Ware
app.use(express.json())
app.use("/api",Route)





port= process.env.PORT || 1010
app.listen(port,()=>{
    console.log("server is running")
})