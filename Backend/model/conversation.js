const mongoose=require("mongoose")

const converScheme=mongoose.Schema({
    members:Array
},
{
    timestamps:true
})

const converModel=mongoose.model("conversations",converScheme)
module.exports=converModel