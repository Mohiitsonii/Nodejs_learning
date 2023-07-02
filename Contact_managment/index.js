const express= require('express')
const connectDb = require('./config/dbConnection')
const errorHandler = require('./middleware/errorhandler')
const app=express()
const dotenv=require('dotenv').config()
const port =process.env.PORT || 5000

connectDb();

app.use(express.json())
app.use("/api",require('./route/contact_route'))
app.use(errorHandler); 


// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Get all contact"})
//     console.log("Get all contact")
// })

app.listen(port,()=>{
    console.log(`server is listing on the ${port}`)
})