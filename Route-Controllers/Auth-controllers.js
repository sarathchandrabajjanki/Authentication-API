var UserModel=require("../Model/Model-Schema")
var bcrypt=require("bcrypt")


var register=async(req,res)=>{
    try{
        // extract the user information
        var {userName,email,password,role}=req.body
        // check the username and email exists
        var checkUser=await UserModel.findOne({$or:[{userName},{email}]})
        if(checkUser){
            res.status(400).json({message:"already exists the user"})
        }
        // generate a salt and hash the password
        var salt=await bcrypt.genSalt(10)
        var HashPassword=await bcrypt.hash(password,salt)
        // create a new user to database
        var createUser=await UserModel.create({
            userName,
            email,
            password:HashPassword,
            role
        })
        res.status(201).json(createUser)

    }
    catch(eror){
res.status(400).json({message:"error",eror})
    }

}
var Login=async(req,res)=>{

}
module.exports={register,Login}