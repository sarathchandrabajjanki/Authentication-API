var cloudinary=require("../Configur/cloudinary")
var uploadToCloudinary=async(filepath)=>{
    try {
        var result= await cloudinary.uploader.upload(filepath)
        return{
            url:result.secure_url,
            PublicID:result.public_id
        }
    } catch (error) {
        console.log(error)
        result.status(401).json({message:"error"})
    }
}
module.exports={uploadToCloudinary}
    