const { Router } = require("express");
const { gettask, posttask } = require("../controller/task.controller");



const taskRouter=Router()

taskRouter.get("/",gettask)
taskRouter.post("/",posttask)


module.exports= taskRouter