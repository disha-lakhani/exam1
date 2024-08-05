const mongoose=require('mongoose')

const userscema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const user=mongoose.model("user",userscema)
module.exports=user