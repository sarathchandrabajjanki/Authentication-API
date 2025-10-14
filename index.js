require("dotenv").config()
var express=require("express")
const ConnectToDataBase = require("./DataBase/DB")
const app=express()
var cors=require("cors")
var Route=require("./Routes/User-Route")
var HomeRoute=require("./Routes/home-Route")
//connect to data base

ConnectToDataBase()

// added Middle Ware
app.use(express.json())
app.use("/api",Route)
app.use("/api/",HomeRoute)

app.use(cors())





port= process.env.PORT || 1010
app.listen(port,()=>{
    console.log("server is running")
})