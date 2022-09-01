const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://kirandas:kirandas96@cluster0.pkvmmvp.mongodb.net/?retryWrites=true&w=majority")
module.exports=connection