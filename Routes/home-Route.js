var express=require("express")
const authMiddleware = require("../Middleware/auth-middleware")

var Route=express.Router()

Route.get("/home",authMiddleware,(req,res)=>{
    res.status(200).json({message:"welcome to home page"})

})
module.exports=Route