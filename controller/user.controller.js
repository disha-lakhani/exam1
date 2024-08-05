const user = require("../model/user.scema")

const getuser=async(req,res)=>{
 let data = await user.find()
    res.send(data)
}

const postuser=async(req,res)=>{
    let data = await user.create(req.body)
    res.send(data)
}

const deleteuser = async (req, res) => {
    let { id } = req.params
    let data = await user.findByIdAndDelete(id)
    res.send(data)
}

const updateuser = async (req, res) => {
    let { id } = req.params
    let data = await user.findByIdAndUpdate(id, req.body)
    res.send(data)
}



module.exports={getuser,postuser,updateuser,deleteuser}

