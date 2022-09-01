const {Router}=require("express")
const converModel = require("../model/conversation")

const converRouter=Router()

converRouter.post("/",async(req,res)=>{
    const newConversation=new converModel({
        members:[req.body.senderId,req.body.receiverId]
    })

    try {
        const savedConversations= await newConversation.save()
        res.status(200).json(savedConversations)
    } catch (error) {
        res.status.status(500).send(error)
    }

    // newConversation.save((err,data)=>{
    //     if(err){
    //         res.status.status(500).send(err)
    //     }
    //     else{
    //         res.status(201).send(`new newConversation created ${data}`)
    //     }
    // })
})
converRouter.get("/:userId",async(req,res)=>{
    try {
        const conversation=await converModel.find({
            members:{$in:[req.params.userId]}
        })
    res.status(200).json(conversation)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports=converRouter