import dotenv from "dotenv";
import mongoose from 'mongoose';
import connectDB from "./db/index.js"
import express from "express"

const app = express()




dotenv.config({
    path: './.env'
})



connectDB()

.then(() =>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`Server is running at port :${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MONGO DB connection failed",err);
    
})







// (async () => {
// try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${
//         DB_NAME}`)
// }
// catch (error){
//     console.error("ERROR",error);   
//     throw err;
// }
//   })();
  
