var express=require("express")
const authMiddleware = require("../Middleware/auth-middleware")

var Route=express.Router()

Route.get("/admin",authMiddleware,(req,res)=>{
    res.status(201).json({message:"Welcome to admin page"})
})
module.exports=Route