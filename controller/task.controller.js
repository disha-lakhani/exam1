const task = require("../model/task.schema")

const gettask=async(req,res)=>{
    let data = await task.find()
       res.send(data)
   }
   
   const posttask=async(req,res)=>{
       let data = await task.create(req.body)
       res.send(data)
   }
   
   
   module.exports={gettask,posttask}