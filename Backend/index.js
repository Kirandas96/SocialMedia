const express=require("express")
const connection = require("./db")
const chatRouter = require("./Routes/chat")
const Pusher = require("pusher");
const { default: mongoose } = require("mongoose");
const converRouter = require("./Routes/conversation");

const app=express()
const port=process.env.PORT || 5000 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// const db=mongoose.connection

// db.once('open',()=>{
//     console.log("DB is connected")
//     const allMsgs=db.collection('chatContents')
//     const stram=allMsgs.watch()

//     changeStream.on("change",(change)=>{
//         console.log("change",change)

//         // if()
//     })
// })


// const pusher = new Pusher({
//   appId: "1470935",
//   key: "198d500845868621ac9b",
//   secret: "c24eb66fa7a8ee21b9b8",
//   cluster: "ap2",
//   useTLS: true
// });

app.get("/",(req,res)=>{
    res.status(200).send("Hiiiii")
})

app.use("/conversations",converRouter)


app.listen(port,async()=>{
    try {
        await connection
        console.log(`server started ${port}`)
    } catch (er) {
       console.log(er) 
    }
})