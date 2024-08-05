const mongoose=require('mongoose')


const dbconnect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/exam")
    console.log("connect to database..");
    
}

module.exports=dbconnect