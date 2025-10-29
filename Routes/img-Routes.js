var express=require("express")
const uploadImage = require("../Route-Controllers/img-Controller")

var Route=express.Router()

Route.post("/upload",uploadImage)