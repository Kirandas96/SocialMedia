const {Router}=require("express")
const chatModel = require("../model/conversation")

const chatRouter=Router()

chatRouter.post("/messages/new",async(req,res)=>{
    const messages=new chatModel(req.body)

    messages.save((err,data)=>{
        if(err){
            res.status.apply(500).send(err)
        }
        else{
            res.status(201).send(`new messages created ${data}`)
        }
    })
})
chatRouter.get("/messages/all",async(req,res)=>{
    const allMessages=await chatModel.find()
    return res.send(allMessages)
})

module.exports=chatRouter