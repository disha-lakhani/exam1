const { Router } = require("express");
const { getuser, postuser } = require("../controller/user.controller");


const userRouter=Router()

userRouter.get("/",getuser)
userRouter.post("/",postuser)

module.exports= userRouter