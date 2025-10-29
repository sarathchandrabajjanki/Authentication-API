var image=require("../Model/image-Schema")
var uploadToCloudinary=require("../Cloudinaryhelper/helper")
var uploadImage=async(req,res)=>{
    try {
        if(!req.file){
            res.status(401).json({message:"file is missing"})
        }
        // upload a file
        var {url,PublicId}=await uploadToCloudinary(req.file.path)
        // create the database
        var newlyUploaded=new image({
            url,
            PublicId
        })
        newlyUploaded.save()
        res.status(201).json({message:"image added"})



        
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=uploadImage