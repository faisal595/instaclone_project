const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.listen(process.env.PORT  || 4000,()=>{
    console.log("server started at post:5000")
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())
const DB ="mongodb+srv://faisal595:Faisalahmad@cluster0.daoa4uz.mongodb.net/instaclone?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("Connection Success")
}).catch((err)=>{
    console.log(err.massage)
})

app.get("/",(req,res)=>{
    res.send("Welcome to instaclone app : server side code")
})

// middleware
app.use("/post",postController)