var UserModel=require("../Model/Model-Schema")
var bcrypt=require("bcrypt")
var Webtoken=require("jsonwebtoken")


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
        res.status(201).json(createUser,{message:"created a user"})

    }
    catch(eror){
res.status(400).json({message:"error",eror})
    }

}
var Login=async(req,res)=>{
    try {
    var {userName,password}=req.body// extractecd|collected the information
    var userData= await UserModel.findOne({userName})
    if(!userData){
       return res.status(400).json({message:"invalid user or password"})
    }

    var UserPassword= await bcrypt.compare(password,userData.password)
    if(!UserPassword){
       return res.status(400).json({message:"invalid user or password"})
    }
    // generate web token
    var generateToken=Webtoken.sign({
        userId:userData._id,
        userName:userData.userName,
        email:userData.email,
        role:userData.role

    },process.env.JSON_WEB_TOKEN,{expiresIn:"10m"})
    
    res.status(200).json({message:"login success",generateToken})

        
    } catch (error) {
        console.log(error)
    }

}
module.exports={register,Login}