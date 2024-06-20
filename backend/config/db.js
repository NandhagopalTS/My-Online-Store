import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"store"}).then(()=>{
        console.log("DB connected to store");
    }).catch((err)=>{
        console.log(`ERROR : ${err.message}`);
        process.exit(1)
    })

}