import dotenv from "dotenv"


import connectDb from "./db/db.js";


dotenv.config({ path: './.env' })
connectDb()

// db connection approuch 2

/*
import express from "express"
const app = express()

;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Appilcation is unable to talk",error);
        
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listing on port ${process.env.PORT}`);
        
       })
    } catch (err) {

        console.error("ERROR",err);

        throw err
        
        
        
    }
})()
    */