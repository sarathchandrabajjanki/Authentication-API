var mongoose=require("mongoose")

var NewSchema= new mongoose.Schema({
     userName: {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowerCase : true
    },
    password: {
        type : String,
        required : true
    },
    role: {
        type : String,
        enum : ["user","admin"],
        default : "user"
    }

})
module.exports=mongoose.model("usersData",NewSchema)