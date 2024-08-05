const { Router } = require("express");
const { gettask, posttask, updatetask, deletetask } = require("../controller/task.controller");



const taskRouter=Router()

taskRouter.get("/",gettask)
taskRouter.post("/",posttask)
taskRouter.patch("/:id",updatetask)
taskRouter.delete("/:id",deletetask)


module.exports= taskRouter