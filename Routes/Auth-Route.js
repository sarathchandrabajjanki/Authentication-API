var express=require("express")
var {register,Login}=require("../Route-Controllers/Auth-controllers")
var Route=express.Router()

Route.post("/register",register)

Route.get("/login",Login)



module.exports=Route