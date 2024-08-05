const task = require("../model/task.schema")

const gettask=async(req,res)=>{
    let data = await task.find()
       res.send(data)
   }
   
   const posttask=async(req,res)=>{
       let data = await task.create(req.body)
       res.send(data)
   }
   
   const deletetask = async (req, res) => {
    let { id } = req.params
    let data = await task.findByIdAndDelete(id)
    res.send(data)
}

const updatetask = async (req, res) => {
    let { id } = req.params
    let data = await task.findByIdAndUpdate(id, req.body)
    res.send(data)
}
   
   module.exports={gettask,posttask,updatetask,deletetask}