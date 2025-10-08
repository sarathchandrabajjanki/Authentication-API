
var mongoose=require("mongoose")

async function ConnectToDataBase(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to data base")
        
    } catch (error) {
        console.log(error)
        
    }

}
module.exports=ConnectToDataBase