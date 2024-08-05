const mongoose=require('mongoose')

const taskscema=new mongoose.Schema({
    taskname:String,
    description:String,
    status:String
})

const task=mongoose.model("task",taskscema)
module.exports=task