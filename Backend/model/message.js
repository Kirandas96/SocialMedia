const mongoose=require("mongoose")

const chatScheme=mongoose.Schema({
    message:String,
    name:String,
    time:String,
    recieved:Boolean
})

const chatModel=mongoose.model("chatContents",chatScheme)
module.exports=chatModel